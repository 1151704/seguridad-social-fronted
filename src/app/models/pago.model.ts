import { Plan } from 'src/app/models/plan.model';
import { File } from "./file.model";

export class Pago {
TX_ADMINISTRATIVE_FEE: string;
TX_TAX: string;
TX_TAX_ADMINISTRATIVE_FEE: string;
TX_TAX_ADMINISTRATIVE_FEE_RETURN_BASE: string;
TX_VALUE: string;
authorizationCode: string;
buyerEmail:string;
currency: string;
cus: string;
description: string;
extra1: string;
extra2: string;
extra3: string;
installmentsNumber: string;
lapPaymentMethod: string;
lapPaymentMethodType: string;
lapResponseCode: string;
lapTransactionState: string;
lng: string;
merchantId: string;
merchant_address: string;
merchant_name: string;
merchant_url: string;
message: string;
orderLanguage: string;
polPaymentMethod:string;
polPaymentMethodType:string;
polResponseCode: string;
polTransactionState: string;
processingDate: string;
pseBank: string;
pseCycle: string;
pseReference1:string;
pseReference2: string;
pseReference3: string;
referenceCode: string;
reference_pol: string;
risk: string;
signature: string;
telephone: string;
transactionId: string;
transactionState: string;
trazabilityCode: string;

}
