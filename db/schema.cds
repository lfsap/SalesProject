namespace com.lfsales;

using {
    cuid
} from '@sap/cds/common';

context Sales {
    entity SalesHeader : cuid {
        email : String(30);
        FirstName : String(30);
        LastName    : String;
        Country : String(30);
        CreatedOn : Date;
        DeliveryDate : DateTime;
        OrderStatus : Integer;
        ImageUrl : String;
        SalesItems : Composition of SalesItem on SalesItems.SalesHeader = $self;
    };

    entity SalesItem : cuid {
        Pos : Integer;
        Name : String(40);
        Description : String(40);
        ReleaseDate : Date;
        DiscontinuedDate : Date;
        Price : Decimal(12,2);
        Height : Decimal(15,3);
        Widht : Decimal(13,3);
        Depth : Decimal(12,2);
        Quantity : Decimal(16,2);
        UnitOfMeasure : String(3);
        SalesHeader : Association to SalesHeader;
    };
};