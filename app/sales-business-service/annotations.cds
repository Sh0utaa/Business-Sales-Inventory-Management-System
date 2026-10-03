using SalesService as service from '../../srv/sales/SalesService';
annotate service.Order with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'orderDate',
                Value : orderDate,
            },
            {
                $Type : 'UI.DataField',
                Label : 'status',
                Value : status,
            },
            {
                $Type : 'UI.DataField',
                Label : 'total',
                Value : total,
            },
            {
                $Type : 'UI.DataField',
                Label : 'totalCost',
                Value : totalCost,
            },
            {
                $Type : 'UI.DataField',
                Label : 'netProfit',
                Value : netProfit,
            },
            {
                $Type : 'UI.DataField',
                Label : 'deliveryFee',
                Value : deliveryFee,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'orderDate',
            Value : orderDate,
        },
        {
            $Type : 'UI.DataField',
            Label : 'status',
            Value : status,
        },
        {
            $Type : 'UI.DataField',
            Label : 'total',
            Value : total,
        },
        {
            $Type : 'UI.DataField',
            Label : 'totalCost',
            Value : totalCost,
        },
        {
            $Type : 'UI.DataField',
            Label : 'netProfit',
            Value : netProfit,
        },
    ],
);

