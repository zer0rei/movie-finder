const AxiosMock = jest.fn(() => Promise.resolve({ data: [] }));
AxiosMock.get = jest.fn(() => Promise.resolve({ data: [] }));
AxiosMock.post = jest.fn(() => Promise.resolve({ data: [] }));
export default AxiosMock;
