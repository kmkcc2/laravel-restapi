<?php

namespace App\Filters\V1;
use Illuminate\Http\Request;
use App\Filters\ApiFilter;

class InvoicesFilter extends ApiFilter{

    protected $allowedParams = [
        'customerId' => ['eq', 'gt', 'lt'],
        'amount' => ['eq', 'gt', 'lt'],
        'status' => ['eq', 'neq'],
        'billedDate' => ['eq', 'gt', 'lt'],
        'paidDate' => ['eq', 'gt', 'lt'],
    ];

    protected $columnMap = [
        'billedDate' => 'billed_date',
        'paidDate' => 'paid_date',
        'customerId' => 'customer_id',
    ];

    protected $operatorMap = [
        'eq' => '=',
        'lt' => '<',
        'gt' => '>',
        'lte' => '<=',
        'gte' => '>=',
        'neq' => '!='
    ];
}
