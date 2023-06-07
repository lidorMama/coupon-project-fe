export default interface ICoupon{
    id: number;
    name: string;
    price: number;
    description: string;
    startDate?: string;
    endDate: string;
    categoryName: string;
    companyName?: string;
}