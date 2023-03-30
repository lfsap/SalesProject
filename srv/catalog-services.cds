using com.lfsales as sales from '../db/schema';

service CatalogService {
    entity SalesHeader as projection on sales.Sales.SalesHeader;
    entity SalesItem as projection on sales.Sales.SalesItem;
}