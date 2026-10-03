using SalesService as service from '../../srv/sales/SalesService';

annotate service.Order with @(
    UI.SelectionFields : [ status, orderDate, customer_ID ],
    UI.LineItem : [
        { $Type: 'UI.DataField', Value: ID,          Label: 'Order ID' },
        { $Type: 'UI.DataField', Value: customer_ID ,Label: 'Customer ID' },
        { $Type: 'UI.DataField', Value: orderDate,   Label: 'Order Date' },
        { $Type: 'UI.DataField', Value: status,      Label: 'Status' },
        { $Type: 'UI.DataField', Value: total,       Label: 'Total (GEL)' }
    ],
    UI.HeaderInfo: {
        TypeName: 'Order',
        TypeNamePlural: 'Orders',
        Title: { $Type: 'UI.DataField', Value: ID },
        Description: { $Type: 'UI.DataField', Value: status }
    },
    UI.Facets : [
        {
            $Type  : 'UI.ReferenceFacet',
            ID     : 'HeaderFacet',
            Label  : 'General Information',
            Target : '@UI.FieldGroup#HeaderDetails',
        },
        {
            $Type  : 'UI.ReferenceFacet',
            ID     : 'ItemsFacet',
            Label  : 'Order Items',
            Target : 'items/@UI.LineItem',
        }
    ],
    UI.FieldGroup #HeaderDetails : {
        Data : [
            { $Type: 'UI.DataField', Label: 'Customer',     Value: customer_ID },
            { $Type: 'UI.DataField', Label: 'Deliverer',    Value: deliverer_ID },
            { $Type: 'UI.DataField', Label: 'Delivery Fee', Value: deliveryFee },
            { $Type: 'UI.DataField', Label: 'Total Cost',   Value: totalCost },
            { $Type: 'UI.DataField', Label: 'Net Profit',   Value: netProfit }
        ]
    }
);

annotate service.OrderItem with @(
    UI.LineItem : [
        { $Type: 'UI.DataField', Value: product_ID,   Label: 'Product ID' },
        { $Type: 'UI.DataField', Value: product.name, Label: 'Product Name' },
        { $Type: 'UI.DataField', Value: quantity,     Label: 'Quantity' },
        { $Type: 'UI.DataField', Value: unitPrice,    Label: 'Unit Price' },
        { $Type: 'UI.DataField', Value: subtotal,     Label: 'Subtotal' }
    ]
);

annotate service.OrderItem with {
    product @(
        Common.ValueList : {
            $Type          : 'Common.ValueListType',
            CollectionPath : 'Product',
            Parameters     : [
                { $Type: 'Common.ValueListParameterInOut',       LocalDataProperty: product_ID, ValueListProperty: 'ID' },
                { $Type: 'Common.ValueListParameterDisplayOnly', ValueListProperty: 'name' },
                { $Type: 'Common.ValueListParameterDisplayOnly', ValueListProperty: 'price' }
            ]
        }
    );
};