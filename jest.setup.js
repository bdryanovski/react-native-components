// Suppress react-test-renderer deprecation warnings
const originalError = console.error;
console.error = (...args) => {
    if (
        typeof args[0] === 'string' &&
        args[0].includes('react-test-renderer is deprecated')
    ) {
        return;
    }
    originalError.call(console, ...args);
};

// Mock react-native
jest.mock('react-native', () => ({
    useColorScheme: jest.fn(() => 'light'),
    Platform: {
        OS: 'ios',
        select: jest.fn((obj) => obj.ios || obj.default),
    },
    StyleSheet: {
        create: jest.fn((styles) => styles),
    },
}));
