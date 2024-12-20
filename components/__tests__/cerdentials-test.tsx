import { render, fireEvent, waitFor } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabTwoScreen from './../../app/(tabs)/credentials';
import IssueCredentialScreen from './../../app/(tabs)/scan';
import { useAuth } from './../../components/AuthContext';
import { Alert } from 'react-native';
import { router } from 'expo-router';
jest.mock("expo-font");

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
jest.mock('./../../components/AuthContext', () => ({
  useAuth: jest.fn(),
}));
jest.mock('expo-router', () => ({
  router: {
    replace: jest.fn(),
  },
}));

jest.spyOn(Alert, 'alert');

describe('TabTwoScreen', () => {
  const mockedUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;

  beforeEach(() => {
    mockedUseAuth.mockImplementation(() => ({
      userRole:'Issuer' ,
      login: jest.fn(),
      logout: jest.fn(),
      selectType: jest.fn(),
      isLoggedIn: true,
      DIDType:'national'
    }));
  });

  it('should render credentials list correctly', async () => {
    const { getByText } = render(<TabTwoScreen />);
    await waitFor(() => {
      expect(getByText('Credentials')).toBeTruthy();
    });
  });

  it('should add a new credential when user role is Issuer', async () => {
    const { getByText } = render(<TabTwoScreen />);
    const addButton = getByText('Add');
    fireEvent.press(addButton);

    await waitFor(() => {
      expect(getByText('Scan Page')).toBeTruthy();
    });
  });
});

describe('IssueCredentialScreen', () => {
  const mockedUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;

  beforeEach(() => {
    mockedUseAuth.mockImplementation(() => ({
      userRole:'Issuer' ,
      login: jest.fn(),
      logout: jest.fn(),
      selectType: jest.fn(),
      isLoggedIn: true,
      DIDType:'university'
    }));
  });

  it('should generate and display QR code correctly', async () => {
    const { getByText, getByTestId } = render(<IssueCredentialScreen />);

    await waitFor(() => {
      expect(getByText('Scan this QR Code to proceed:')).toBeTruthy();
      expect(getByTestId('QRCode')).toBeTruthy();
    });
  });

  it('should handle accept and navigate to credentials page', async () => {
    const { getByText } = render(<IssueCredentialScreen />);
    const acceptButton = getByText('Simulate Accept');
    fireEvent.press(acceptButton);

    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith(
        'Offer Accepted',
        'Credential issued successfully.'
      );
      expect(router.replace).toHaveBeenCalledWith('/credentials');
    });
  });

  it('should handle reject and show alert', async () => {
    const { getByText } = render(<IssueCredentialScreen />);
    const rejectButton = getByText('Simulate Reject');
    fireEvent.press(rejectButton);

    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith(
        'Offer Rejected',
        'The Holder rejected the offer.'
      );
    });
  });
});
