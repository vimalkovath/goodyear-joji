



<!-- older -->

# 11 july planning 

## workorder landing

filter functionality `api` need to implement.\
export `api` => need to create from backend .\
print => template need to develop and data need to insert.\
submit => `api` required to create a po to SAP.\
edit => like create new workorder page need to create but prefilled and editable page.\


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "@odata.context": "$metadata#CONWorkOrder/$entity",
  "CONWorkOrderID": 2,
  "Companycode": "3000",
  "PlantProjectCode": "3001",
  "PSProjectCode": "3001",
  "WorkOrderNo": "WO/3000/3001/1",
  "WorkOrderDate": "2022-07-07",
  "ContractorBPCode": "BLK222",
  "ContractorResponsiblePerson": "Mr Suresh 900000019",
  "OldWorkOrderRefNo": null,
  "OldWorkOrderRefDate": null,
  "WorkCategory": "Archetectural Consultancy",
  "ExchangeRate": 1,
  "CurrencyCode": null,
  "RetentionPercentage": 10,
  "IsRetentionCeilingRequired": null,
  "RetentionCeilingAmount": null,
  "IsRetentionAllowedtoEditinRabill": null,
  "IsTaxesEditable": null,
  "WorkStartDate": "2022-06-07",
  "WorkEndDate": "2023-06-05",
  "BillingType": null,
  "Scopeofwork": "civil works",
  "RemarksWO": "civil works",
  "defectliabilityperiod": null,
  "defectliabilityperiodUnitID": null,
  "RABillFreequency": null,
  "LiquidityDamage": null,
  "FinalContractAmount": null,
  "ResponsiblePerson": null,
  "ResponsiblePersonPhoneNo": null,
  "SiteResponsiblePersonName": null,
  "SiteResponsiblePersonPhoneNo": null,
  "IsActiveFlag": null,
  "IsDeleteFlag": null,
  "ReplecatedWorkOrderID": null,
  "IsApprovedFlag": null,
  "ApprovedDate": null,
  "IsSubmittedFlag": null,
  "SubmittedDate": null,
  "IsRejectedFlag": null,
  "ReasonforRejection": null,
  "CancellationDate": null,
  "ReasonForCancellation": null,
  "CancelledUserCode": null,
  "IsLOAAccepted": null,
  "AgreementSigned": null,
  "IsPartRateAllowed": null,
  "MileStonePenalityDetails": null,
  "BonusDetails": null,
  "CurrentVersionNo": null,
  "DATWOTypeID": null,
  "CreatedUserCode": "anonymous",
  "CreatedDate": "2022-07-01T07:18:25.346Z",
  "ModifiedUserCode": null,
  "ModifiedDate": null
});

var requestOptions = {
  method: 'PATCH',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://79dc7fe9trial-dev-mm-contracts-srv.cfapps.us10.hana.ondemand.com/service/contract/CONWorkOrder(2)", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


## create workorder 

save => `api`.\
submit for approval => `api`.\
version history => (`api`) new page / popup => inside that table with version info from API.\

## BOQ details

1 import from ecel=> apload excel `API` response should show in table => started
2 Json reposnse will be aligned in table
3 .tax pop up for export which will be from Json response

### import from ecel=> apload excel `API` response should show in table => started
1.insert data --> POST
https://79dc7fe9trial-dev-mmcontracts9-srv.cfapps.us10.hana.ondemand.com/service/filemgmt/MediaFile
{ 
  "id": 1,
  "mediaType": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
}
2.Update the media file
https://79dc7fe9trial-dev-mmcontracts9-srv.cfapps.us10.hana.ondemand.com/service/filemgmt/MediaFile(1000000009)/content
get the File id from first step. In body attach the excel sheet as binay
3.To get the final out put
https://79dc7fe9trial-dev-mmcontracts9-srv.cfapps.us10.hana.ondemand.com/service/filemgmt/parseBOQFile
{
    "fileid":1000000009
 
}




## terms and conditions
document type `api`
view `api`
delete `api`

## advances => almost done

New changes



advance type `api` => done
https://79dc7fe9trial-dev-mm-contracts-srv.cfapps.us10.hana.ondemand.com/service/contract/CONWOAdvanceType

adding to table `api` => done
update `api` on same page data should show 

list API/Add/Edit
https://79dc7fe9trial-dev-mm-contracts-srv.cfapps.us10.hana.ondemand.com/service/contract/CONWOadvance

{
"CONWOadvanceId": 1,
"CONWorkOrderID": 2,
"CONWOAdvanceTypeID": 1,
"FinalContractAmount": 10000,
"AdvancePercentage": 10,
"AdvanceAmount": 1000,
"AdvanceRecoveryPercentage": 10,
"IsBankGauranteeRequired": false,
"IsDeleteFlag": false,
"DeductedAmount": 0,
"TotalAdvRecoverywhenPercentageofworkdone": 80,
"COMInstanceID": 1,
"CreatedUserCode": null,
"CreatedDate": null,
"ModifiedUserCode": null,
"ModifiedDate": null
}
## company selected material
material name dropdown `api` 
add `api`
delete `api` 

## drawings and attachments
upload and save `api`

## material basic rate
material name dropdown `api`
add `api`
delete `api` 



## Configuration 
two tabs 


# General setting 
API:
https://79dc7fe9trial-dev-mm-contracts-srv.cfapps.us10.hana.ondemand.com/service/contract/CONConfigurationGeneral?$filter=Companycode%20eq%20%275000%27

{
"CONConfigurationGeneralID": 1,
"Companycode": "5000",
"COMInstanceID": 1,
"BudgetCheckingType": "A",
"BudgetCheckingTolerancePercentage": 10,
"AdvanceRecoveryOnType": "A",
"RetentionCalculationType": 2,
"IsRestrictionRequiredinAmendmentNOTtoExceedWOValue": false,
"CreatedUserCode": null,
"CreatedDate": null,
"ModifiedUserCode": null,
"ModifiedDate": null
}

values to be passed
	BudgetCheckingType : 'A:Allow; T:Allow with Tolerance Percentage ; R: restrict
	AdvanceRecoveryOnType : 'A:Advance Amt; B:Bill Amount								
	RetentionCalculationType :Integer;//'1:Basic Amount;2 : Basic + Tax Addition; 3:Basic + Tax Deduction		
	
if CONConfigurationGeneralID>0 the PATCH else POST

# Document serial Number

# document serial number setting

"DocumentType": "Workorder","Mbook","RABill"

https://79dc7fe9trial-dev-mm-contracts-srv.cfapps.us10.hana.ondemand.com/service/contract/COMDocumentSerialNoSetting
https://79dc7fe9trial-dev-mm-contracts-srv.cfapps.us10.hana.ondemand.com
{
"COMDocumentSerialNoSettingId": 1,
"COMInstanceID": 1,
"Companycode": "3000",
"DocumentType": "Workorder",
"ManualAutoStatus": "A",
"DocumentPrefix": "WO",
"GlobalSerialNoRequiredFlag": false,
"SerialNoPlantProjectwiseRequiredFlag": true,
"SerialNoPSProjectwiseRequiredFlag": false,
"CompanyShortNameRequiredFlag": true,
"PlantProjectShortNameRequiredFlag": true,
"PSProjectShortNameRequiredFlag": false,
"SeperatorCharacter": "/",
"CreatedUserCode": null,
"CreatedDate": null,
"ModifiedUserCode": null,
"ModifiedDate": null
}




# completed

## status of completion from planned work

contractor Contact Person should be text box => `Done` .\

contractor api:=>`Done`.\
https://79dc7fe9trial-dev-mmcontracts9-srv.cfapps.us10.hana.ondemand.com/service/s4hanadata/s4businesspartner .\

New workorder number .\
https://79dc7fe9trial-dev-mmcontracts9-srv.cfapps.us10.hana.ondemand.com/contracts/getnewworkordernumber(companycode='3000',plantcode='3001',projectcode='3000') .\

heading : Billing based on. =>`Done`.\
BBQ CompletionMilestone Completion =>`Done`.\
ONly one should able to select => `Done`.\

BBQ=>BOQ =>`Done`.\

Work Order Landing Page => loading all existing drop downs => `pending`.\


## 27-Jun-2022	27-Jun-2022	"
contractor Contact Person should be text box => Done .\

contractor api:=>Done .\
https://79dc7fe9trial-dev-mmcontracts9-srv.cfapps.us10.hana.ondemand.com/service/s4hanadata/s4businesspartner


heading : Billing based on. =>Done.\
BBQ CompletionMilestone Completion =>Done.\
ONly one should able to select => Done .\

BBQ=>BOQ =>Done .\

Work Order Landing Page = > loading all existing drop downs"	from 5:30 to 7.\
27-Jun-2022	27-Jun-2022	New workorder number https://79dc7fe9trial-dev-mmcontracts9-srv.cfapps.us10.hana.ondemand.com/contracts/getnewworkordernumber(companycode='3000',plantcode='3001',projectcode='3000')	from 7:45 to 8:15.\

## 22-Jun-2022	22-Jun-2022	
removing existing waring messges and pushing to development	form 11: to 11:15 .\

## 21-Jun-2022	21-Jun-2022	
"company code api,
plant api,
construction api,
Git code base updation"	from :10:15 to 11:55

19-Jun-2022	19-Jun-2022	tob navbar company select and discussion	from :8:15 to 9:15

## node json to excel demo app  user landing get onload 10-11
9-Jun-2022	9-Jun-2022	added milestone page	added milestone page- design as per excel, correcting workorder landing page with new inputs .\
9-Jun-2022	9-Jun-2022	node jsontoexcel 	node json to excel demo app to joji 7-8.\

9-Jun-2022	9-Jun-2022	api implementation.\
user landing get onload 10-11.\

## 2 api implementation
8-Jun-2022	8-Jun-2022	api implementation.\
2 - api implementation (userlanding get and post ).\


# api implementation
7-Jun-2022	7-Jun-2022	api implementation
(1.45 to 2.30) & ( 4 to 6.45 )2 - api implementation (work order preparation, get and post) .\





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




// pagination start


  import Pages from "../atoms/Pages";


// pagination
const [currentPage, setCurrentPage] = useState(1);
const [recordsPerPage] = useState(10);
  const [tablePaginatedData, setTablePaginatedData] = useState([]);


if(tabData && tabData.value && tabData.value.length>0){
    setTableData(tabData.value);
    setTablePaginatedData((tabData.value.length>recordsPerPage)?tabData.value.slice(0,recordsPerPage):tabData.value)
  }else{
    setTableData([]);
    setTablePaginatedData([]);
  }


  const getPaginatedData=()=>{
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // Records to be displayed on the current page
  const b = _.clone(tableData);
  const currentRecords = b.slice(indexOfFirstRecord, indexOfLastRecord);
  setTablePaginatedData(currentRecords);
}

  useEffect(() => {
    getPaginatedData();
  }, [currentPage]);

  const getPages=()=>{
    let nPages = 1;
    const dataLength = tableData.length;
    if (dataLength > recordsPerPage) {
      nPages = Math.ceil(dataLength / recordsPerPage);
    }
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
    return {
      pageNumbers,
      currentPage,
      setCurrentPage
    };
  }
      <Pages data={getPages()} />

<!-- pagination end -->




{
            "PaymentRefNo": "3000/0002",
            "PaymentDate": "2022-11-11",
            "ContractorBPCode": "1000000027",
            "IsApprovedFlag": false,
            "IsSubmittedFlag": false,
            "Remarks": "Payment",
            "SubmittedUserCode": null,
            "SubmittedDate": null,
            "ApprovedByUserCode": null,
            "ApprovedDate": null,
            "IsBankGauranteeRequired": false,
            "BankGauranteeNo": null,
            "BankName": null,
            "BankGauranteeCoverFromDate": null,
            "BankGauranteeExpiryDate": null,
            "BankGauranteeMaturityDate": null
        }


