import { server } from './msw/server';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

// SERVER MOCKING
beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

