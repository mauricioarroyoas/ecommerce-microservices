import { AppDataSource } from "../../src/config/ormconfig";
import {createProduct} from "../../src/controllers/product.controller"
import { getUser } from "../../src/services/userService"

jest.mock("../../src/services/UserService");

const mockSave = jest.fn();
const mockGetRepository = jest.fn().mockReturnValue({
    save: mockSave,
});

(AppDataSource.getRepository as jest.Mock) = mockGetRepository;

describe('createProduct controller', () => {
    const mockReq = {
      body: {
        name: 'Test Product',
        description: 'A good one',
        price: 10.5,
        userId: 1,
      },
    } as any;
  
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as any;
  
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    it('should create a product and return 201 with product + user data', async () => {
      const mockUser = { id: 1, name: 'Test User' };
      const mockProduct = {
        id: 1,
        name: 'Test Product',
        description: 'A good one',
        price: 10.5,
      };
  
      // Mock service and repository return values
      (getUser as jest.Mock).mockResolvedValue(mockUser);
      mockSave.mockResolvedValue(mockProduct);
  
      await createProduct(mockReq, mockRes);
  
      // Assertions
      expect(getUser).toHaveBeenCalledWith(1);
      expect(mockSave).toHaveBeenCalledWith(expect.objectContaining({
        name: 'Test Product',
        description: 'A good one',
        price: 10.5,
      }));
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith({
        ...mockProduct,
        ...mockUser,
      });
    });
  });
