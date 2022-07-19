interface ICar {
  id: number;
  segment: string;
  fuel: string;
  powerSteering: boolean;
  airBags: boolean;
  sunRoof: boolean;
  mattFinish: boolean;
  musicSystem: boolean;
}

interface ICustomer {
  id: number;
  gender: string;
  income: string;
  region: string;
  maritalStatus: string;
  cars: ICar[];
}

interface ISale {
  id: number;
  dateOfPurchase: string;
  sellingPrice: number;
  cars: ICar[];
  customers: ICustomer[];
}

type SalesFilterType = 'SalesID' | 'CustomerID';
type CarsFilterType = 'CarID';
type CustomersFilterType = 'CustomerID';
