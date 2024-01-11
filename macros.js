export const claimTypes = [
    {key:'1', value:'Personal', disabled: true},
    {key:'2', value:'Home'},
    {key:'3', value:'Auto'},
    {key:'6', value:'Business', disabled: true},
    {key:'7', value:'Short Term Disability'},
    {key:'8', value:'Long Term Disability'},
    {key:'9', value:'Workers Compensation'},
  ]

export const companies = [
    {
        name: 'Aetna ',
        claimsSupported: ['Short Term Disability', 'Long Term Disability'],
        shortTermDisabilityData: [{ popUp: false, data: 'https://www.aetna.com/AccountManagerV3/register/selfService/registerMember?language=en' }],
        longTermDisabilityData: [{ popUp: false, data: 'https://www.aetna.com/AccountManagerV3/register/selfService/registerMember?language=en' }],
        paymentData: [{popUp: false, data: 'https://aetnacvshealth.softheon.com/account/payments/locate-account?cid=off-ivl_ackletter_payment' }],
        idCardData: [
            { title: 'Dental', popUp: false, data: 'https://www.aetna.com/AccountManagerV3/register/selfService/registerMember?language=en' }, 
            { title: 'Vision', popUp: false, data: 'https://www.aetna.com/AccountManagerV3/register/selfService/registerMember?language=en' },
            { title: 'Health', popUp: false, data: 'https://www.aetna.com/AccountManagerV3/register/selfService/registerMember?language=en' }], 
        loginData: [{ popUp: false, data: 'https://www.aetna.com/AccountManagerV3/register/selfService/registerMember?language=en' }],
        logo: 'https://nam.edu/wp-content/uploads/2019/06/Aetna-Logo-PNG-Transparent-2.png',
        key: this.name,
    },
    {
        name: 'AmTrust',
        claimsSupported: ['Workers Compensation'],
        workersCompensationData: [{ popUp: false, data: 'https://amtrustfinancial.com/claims' }],
        paymentData: [{ popUp: false, data: 'https://ao.amtrustgroup.com/Insureds/policy-verification' }],
        idCardData: [{ popUp: false, data: '' }],
        loginData: [{ popUp: false, data: 'https://auth.amtrustgroup.com/AuthServer/account/insuredsregistrationflow?clientId=2cfaca7f-b6a6-43c3-a5ea-2858a6433501&redirectUri=https://ao.amtrustgroup.com/Insureds/Login.aspx&scope=openid%20legacy_id&responseMode=form_post&reponseType=id_token%20code' }],
        logo: 'https://mlxwx3bywoz1.i.optimole.com/cb:4l67~34919/w:600/h:601/q:auto/ig:avif/f:best/https://www.globalcoverage.com/wp-content/uploads/sites/1255/2017/11/AmTrustInsurance.png',
        key: this.name,
    },
    {
        name: 'Anthem',
        claimsSupported: ['Short Term Disability', 'Long Term Disability'],
        shortTermDisabilityData: [{ popUp: false, data: 'https://www.anthem.com/register/' }],
        longTermDisabilityData: [{ popUp: false, data: 'https://www.anthem.com/register/' }],
        paymentData: [{popUp: false, data: 'https://payment.anthem.com/sales/payment/ipp#/standalone?state=GA' }], 
        idCardData: [
            { title: 'Dental', popUp: false, data: 'https://www.anthem.com/register/' }, 
            { title: 'Vision', popUp: false, data: 'https://www.anthem.com/register/' },
            { title: 'Health', popUp: false, data: 'https://www.anthem.com/register/' }], 
        loginData: [{ popUp: false, data: 'https://www.anthem.com/register/' }],
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Anthem_Inc_logo.png',
        key: this.name,
    },
    {
        name: 'Companion Life',
        claimsSupported: ['Short Term Disability', 'Long Term Disability'],
        shortTermDisabilityData: [{ popUp: true, data: 
            {
                message: 'Reference the following PDF for instructions to log in and file a claim. Then, go to the "Log in" page in this app.',
                link: 'https://www.companionlife.com/images/uploads/documents/Employee_Online_Account_Access.pdf',
            }}],
        longTermDisabilityData:[{ popUp: true, data: 
            {
                message: 'Reference the following PDF for instructions to log in and file a claim. Then, go to the "Log in" page in this app.',
                link: 'https://www.companionlife.com/images/uploads/documents/Employee_Online_Account_Access.pdf',
            }}],
        paymentData: [{ popUp: true, data: 
            {
                message: 'Reference the following PDF for instructions to log in and make a payment. Then, go to the "Log in" page in this app.',
                link: 'https://www.companionlife.com/images/uploads/documents/Employee_Online_Account_Access.pdf',
            }}],
        idCardData: [
            { title: 'Dental', popUp: true, data: 
            {
                message: 'Reference the following PDF for instructions to log in and get a Dental ID card. Then, go to the "Log in" page in this app.',
                link: 'https://www.companionlife.com/images/uploads/documents/Employee_Online_Account_Access.pdf',
            }},
            { title: 'Vision', popUp: true, data: 
            {
                message: 'Reference the following PDF for instructions to log in and get a Vision ID card. Then, go to the "Log in" page in this app.',
                link: 'https://www.companionlife.com/images/uploads/documents/Employee_Online_Account_Access.pdf',
            }}],
        loginData: [{ popUp: false, data: 'https://ebixhub.ebix.com/sso/client/ClientLogin.aspx?client=clife' }],
        logo: 'https://assets-global.website-files.com/5cd06573f0a28dce76ef883f/5d07f805eebf47099f8a4108_logo-companion.png',
        key: this.name,
    },
    {
        name: 'Donegal',
        claimsSupported: ['Home', 'Auto'],
        homeData: [{ popUp: false, data: 'https://www.donegalgroup.com/registration' }],
        autoData: [{ popUp: false, data: 'https://www.donegalgroup.com/registration' }],
        paymentData: [{ popUp: true, data: {
            message: 'Make a Payment:  Login or call 800-877-0600 (Press 4)',
            phone: '800-877-0600',
            link: 'https://www.donegalgroup.com/registration',
        }}],
        idCardData: [{ popUp: false, data: '' }],
        loginData: [{ popUp: false, data: 'https://www.donegalgroup.com/login' }],
        logo: 'https://www.onespan.com/sites/default/files/2020-03/donegal%20logo.png',
        key: this.name,
    },
    {
        name: 'EMC',
        claimsSupported: ['Property', 'Liability', 'Workers Compensation', 'Auto'],
        propertyData: [{ popUp: true, data: 
            {
                message: 'Report a claim 24 hours a day at 888-362-2255',
                phone: '888-362-2255',
                link: 'https://www.emcins.com/emc/default.asp?deviceSite=df&OKTA=Y&R1=CLPH',
            }}],
        liabilityData: [{ popUp: false, data: 'https://www.emcins.com/emc/default.asp?deviceSite=df&OKTA=Y&R1=CLPH' }],
        workersCompensationData: [{ popUp: false, data: 'https://www.emcins.com/emc/default.asp?deviceSite=df&OKTA=Y&R1=CLPH' }],
        autoData: [{ popUp: false, data: 'https://www.emcins.com/emc/default.asp?deviceSite=df&OKTA=Y&R1=CLPH' }],
        paymentData: [{ popUp: false, data: 'https://www.emcins.com/guest/default.asp?category=IPay' }],
        idCardData: [{ popUp: false, data: '' }],
        loginData: [{ popUp: false, data: 'https://www.emcins.com/emc/default.asp?deviceSite=df&OKTA=Y&R1=CLPH' }],
        logo: 'https://pnptc-media.s3.amazonaws.com/images/EMC_Logo_gradient.max-500x500.png',
        key: this.name,
    },
    {
        name: 'Encompass',
        claimsSupported: ['Home', 'Auto'],
        homeData: [{ popUp: true, data: 
        {
            message: 'Call 1-800-588-7400 to report a home claim anytime, any day. Please have your policy number ready.',
            phone: '800-588-7400',
        }}],
        autoData: [{ popUp: true, data: 
        {
            message: 'Call 1-800-588-7400 to report an auto claim anytime, any day. Please have your policy number ready.',
            phone: '800-588-7400',
        }}],
        paymentData: [{ popUp: false, data: 'https://my.encompassinsurance.com/Registration' }],
        idCardData: [{ popUp: false, data: 'https://my.encompassinsurance.com/Registration' }],
        loginData: [{ popUp: false, data: 'https://my.encompassinsurance.com/Registration' }],
        logo: 'https://ameristaragency.com/wp-content/uploads/2019/06/download-2.png',
        key: this.name,
    },
    {
        name: 'Guardian',
        claimsSupported: ['Short Term Disability', 'Long Term Disability'],
        shortTermDisabilityData: [{ popUp: false, data: 'https://www.guardiananytime.com/registration/' }],
        longTermDisabilityData: [{ popUp: false, data: 'https://www.guardiananytime.com/registration/' }],
        paymentData: [{ popUp: false, data: 'https://www.guardiananytime.com/registration/' }],
        idCardData: [
            { title: 'Dental', popUp: false, data: 'https://www.guardiananytime.com/registration/' }, 
            { title: 'Vision', popUp: false, data: 'https://www.guardiananytime.com/registration/' }],
        loginData: [{ popUp: false, data: 'https://www.guardiananytime.com/registration/' }],
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Guardian_Insurance_logo.svg/1024px-Guardian_Insurance_logo.svg.png',
        key: this.name,
    },
    {
        name: 'Met Life',
        claimsSupported: ['Short Term Disability', 'Long Term Disability'],
        shortTermDisabilityData: [{ popUp: false, data: 'https://online.metlife.com/edge/web/public/benefits' }],
        longTermDisabilityData: [{ popUp: false, data: 'https://online.metlife.com/edge/web/public/benefits' }],
        paymentData: [{ popUp: false, data: 'https://online.metlife.com/edge/web/public/benefits' }],
        idCardData: [
            { title: 'Dental', popUp: false, data: 'https://online.metlife.com/edge/web/public/benefits' }, 
            { title: 'Vision', popUp: false, data: 'https://online.metlife.com/edge/web/public/benefits' }],
        loginData: [{ popUp: false, data: 'https://online.metlife.com/edge/web/public/benefits' }],
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/MetLife_logo.svg/2560px-MetLife_logo.svg.png',
        key: this.name,
    },
    {
        key: '11',
        name: 'New York Life',
        claimsSupported: ['Short Term Disability', 'Long Term Disability'],
        shortTermDisabilityData: [{ popUp: false, data: 'https://www.mynyl.newyorklife.com/VSCRegWebApp/registration/full' }],
        longTermDisabilityData: [{ popUp: false, data: 'https://www.mynyl.newyorklife.com/VSCRegWebApp/registration/full' }],
        paymentData: [{ popUp: false, data: 'https://www.mynyl.newyorklife.com/VSCRegWebApp/registration/full' }],
        idCardData: [
            { title: 'Dental', popUp: false, data: 'https://www.mynyl.newyorklife.com/VSCRegWebApp/registration/full' },   
            { title: 'Vision', popUp: false, data: 'https://www.mynyl.newyorklife.com/VSCRegWebApp/registration/full' }],
        loginData: [{ popUp: false, data: 'https://www.mynyl.newyorklife.com/VSCRegWebApp/registration/full' }],
        logo: 'https://logo-logos.com/2016/12/New_York_Life_Insurance_logo.png',
        key: this.name,
    },
    {
        name: 'Pie Insurance',
        claimsSupported: ['Workers Compensation'],
        workersCompensationData: [{ popUp: false, data: 'https://www.pieinsurance.com/claims' }],
        paymentData: [{ popUp: false, data: 'https://account.pieinsurance.com/create-account' }],
        idCardData: [{ popUp: false, data: '' }],
        loginData: [{ popUp: false, data: 'https://account.pieinsurance.com/create-account' }],
        logo: 'https://pieinsurance.com/images/pie-logo.png',
        key: this.name,
    },
    {
        name: 'Progressive',
        claimsSupported: ['Auto'],
        autoData: [{popUp: false, data: 'https://fnol.progressive.com/begin' }], 
        paymentData: [
            { title: 'Personal', popUp: false, data: 'https://account.apps.progressive.com/access/ez-payment/policy-info' }, 
            { title: 'Company', popUp: false, data: 'https://account.apps.progressive.com/access/ez-payment/policy-info' }],
        idCardData: [
            { title: 'Personal', popUp: false, data: '' }, 
            { title: 'Company', popUp: false, data: '' }],
        loginData: [{ popUp: false, data: 'https://account.apps.progressive.com/access/login?cntgrp=A' }],
        logo: 'https://1000logos.net/wp-content/uploads/2023/01/Progressive-logo.png',
        key: this.name,
    },
    {
        name: 'Sun Life',
        claimsSupported: ['Short Term Disability', 'Long Term Disability'],
        shortTermDisabilityData: [{ popUp: false, data: 'https://account.sunlifeconnect.com/commonlogin/#/registration/createaccount' }],
        longTermDisabilityData: [{ popUp: false, data: 'https://account.sunlifeconnect.com/commonlogin/#/registration/createaccount' }],
        paymentData: [{ popUp: false, data: 'https://account.sunlifeconnect.com/commonlogin/#/registration/createaccount' }],
        idCardData: [
            { title: 'Dental', popUp: false, data: 'https://account.sunlifeconnect.com/commonlogin/#/registration/createaccount' }, 
            { title: 'Vision', popUp: false, data: 'https://account.sunlifeconnect.com/commonlogin/#/registration/createaccount' }],
        loginData: [{ popUp: false, data: 'https://account.sunlifeconnect.com/commonlogin/#/registration/createaccount' }],
        logo: 'https://www.sunlife.ca/content/dam/sunlife/regional/canada/images/grs/Sun_Life_Logo.png',
        key: this.name,
    },
    {
        name: 'Travelers',
        claimsSupported: ['Home', 'Auto', 'Property', 'Liability', 'Workers Compensation'],
        homeData: [{ popUp: false, data: 'https://www.travelers.com/reportmyclaim/typeofclaim' }],
        autoData: [
            { title: 'Personal', popUp: false, data: 'https://www.travelers.com/reportmyclaim/typeofclaim' },
            { title: 'Company', popUp: false, data: 'https://www.travelers.com/reportmyclaim/typeofclaim' } ],
        propertyData: [{ popUp: false, data: 'https://www.travelers.com/claims/file-claim/business' }],
        liabilityData: [{ popUp: false, data: 'https://www.travelers.com/claims/file-claim/business' }],
        workersCompensationData: [{ popUp: false, data: 'https://www.travelers.com/claims/file-claim/business' }],
        paymentData: [{ popUp: false, data: 'https://www.travelers.com/paybill/#/findAccount?flow=otp' }],
        idCardData: [
            { title: 'Personal', popUp: false, data: '' }, 
            { title: 'Company', popUp: false, data: '' }],
        loginData: [
            { title: 'Personal', popUp: false, data: 'https://signin.travelers.com/' },
            { title: 'Company', popUp: false, data: 'https://businessregistration.travelers.com/#/home'}],
        logo: 'https://1000logos.net/wp-content/uploads/2023/01/Travelers-logo.png',
        key: this.name,
    },
    {
        name: 'Universal',
        claimsSupported: ['Home'],
        homeData: [{ popUp: false, data: 'https://universalproperty.com/account/registration' }],
        paymentData: [{ popUp: false, data: 'https://universalproperty.com/account/visitorpayment' }],
        idCardData: [{ popUp: false, data: '' }],
        loginData: [{ popUp: false, data: 'https://universalproperty.com/account/registration' }],
        logo: 'https://tayloragency.com/content/uploads/2017/12/Universal-North-America-Logo.png',
        key: this.name,
    },
    {
        name: 'Unum',
        claimsSupported: ['Short Term Disability', 'Long Term Disability'],
        shortTermDisabilityData: [{ popUp: false, data: 'https://www.unum.com/register' }],
        longTermDisabilityData: [{ popUp: false, data: 'https://www.unum.com/register' }],
        paymentData: [{ popUp: false, data: 'https://www.unum.com/register' }],
        idCardData: [
            { title: 'Dental', popUp: false, data: 'https://www.unum.com/register' }, 
            { title: 'Vision', popUp: false, data: 'https://www.unum.com/register' }],
        loginData: [{ popUp: false, data: 'https://www.unum.com/register' }],
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Unum_Group_logo.svg/1200px-Unum_Group_logo.svg.png',
        key: this.name,
    },
    {
        name: 'Utica',
        claimsSupported: ['Property', 'Liability', 'Workers Compensation', 'Auto'],
        propertyData: [{ popUp: false, data: 'https://myaccount.uticanational.com/claimsx-client/fileaclaim' }],
        liabilityData: [{ popUp: false, data: 'https://myaccount.uticanational.com/claimsx-client/fileaclaim' }],
        workersCompensationData: [{ popUp: false, data: 'https://myaccount.uticanational.com/claimsx-client/fileaclaim' }],
        autoData: [{ popUp: false, data: 'https://myaccount.uticanational.com/claimsx-client/fileaclaim' }],
        paymentData: [{ popUp: false, data: 'https://www.uticanational.com/make-a-payment' }],
        idCardData: [{ popUp: false, data: '' }],
        loginData: [{ popUp: false, data: 'https://myaccount.uticanational.com/ccc-portal/user/register' }],
        logo: 'https://secure.uticanational.com/marketing/annual-report/assets/img/unig-logo-two-lines.png',
        key: this.name,
    },
    {
        name: 'Alliant Health Plans',
        claimsSupported: [],
        paymentData: [{ popUp: false, data: 'https://enrollment.alliantplans.com/SalesPortal/alliantcms' }], 
        idCardData: [{ popUp: false, data: 'https://enrollment.alliantplans.com/MembPortal/#/register' }],
        loginData: [{ popUp: false, data: 'https://enrollment.alliantplans.com/MembPortal/#/register' }],
        logo: 'https://alliantplans.com/wp-content/uploads/2021/11/Alliant-Health-Plans-Logo-Blue.png',
        key: this.name,
    },
    {
        name: 'Cigna',
        claimsSupported: [],
        paymentData: [{ popUp: false, data: 'https://my.cigna.com/web/public/consumer/registration/intro' }],
        idCardData: [ 
            { title: 'Dental', popUp: false, data: 'https://my.cigna.com/web/public/consumer/registration/intro' }, 
            { title: 'Vision', popUp: false, data: 'https://my.cigna.com/web/public/consumer/registration/intro' },
            { title: 'Health', popUp: false, data: 'https://my.cigna.com/web/public/consumer/registration/intro' }], 
        loginData: [{ popUp: false, data: 'https://my.cigna.com/web/public/consumer/registration/intro' }],
        logo: 'https://1000logos.net/wp-content/uploads/2020/07/Cigna-Logo.png',
        key: this.name,
    },
    {
        name: 'Angle',
        claimsSupported: [],
        paymentData: [{ popUp: false, data: '' }],
        idCardData: [{ popUp: false, data: 'https://members.anglehealth.com/create-account' }],
        loginData: [{ popUp: false, data: 'https://members.anglehealth.com/create-account' }],
        logo: 'https://bookface-images.s3.amazonaws.com/logos/129af1f6a91bea2be9ec0035adf5cd65f5aa2bc0.png',
        key: this.name,
    },
    {
        name: 'Hartford',
        claimsSupported: ['Property', 'Liability', 'Workers Compensation', 'Auto'],
        propertyData: [{ popUp: false, data: 'https://www.thehartford.com/commercial-property-insurance/claims' }],
        liabilityData: [{ popUp: false, data: 'https://www.thehartford.com/general-liability-insurance/claims' }],
        workersCompensationData: [{ popUp: false, data: 'https://www.thehartford.com/workers-compensation/claims' }],
        autoData: [{ popUp: false, data: 'https://www.thehartford.com/workers-compensation/claims' }],
        paymentData: [{ popUp: false, data: 'https://business.thehartford.com/expresspay' }],
        idCardData: [{ popUp: false, data: '' }],
        loginData: [{ popUp: false, data: 'https://account.thehartford.com/customer/registration?goto=https:%2F%2Fbusiness.thehartford.com%2Fpolicies&appid=OBSC' }],
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/The_Hartford_Financial_Services_Group_logo.svg/1200px-The_Hartford_Financial_Services_Group_logo.svg.png',
        key: this.name,
    },
    {
        name: 'Philadelphia',
        claimsSupported: ['Property', 'Liability', 'Workers Compensation'],
        propertyData: [{ popUp: false, data: 'https://www.phly.com/Claims/AutoReportClaim.aspx' }],
        liabilityData: [{ popUp: false, data: 'https://www.phly.com/Claims/AutoReportClaim.aspx' }],
        workersCompensationData: [{ popUp: false, data: 'https://www.phly.com/Claims/AutoReportClaim.aspx' }],
        paymentData: [{ popUp: false, data: 'https://payments.phly.com/billpay/GuestPay.aspx' }],
        idCardData: [{ popUp: false, data: '' }],
        loginData: [{ popUp: false, data: 'https://www.phly.com/myphly/newuser.aspx?cc=1' }],
        logo: 'https://cdn-res.keymedia.com/cms/images/us/003/0271_637421228224550730.png',
        key: this.name,
    },
    {
        name: 'AmBetter',
        claimsSupported: [],
        paymentData: [{ popUp: false, data: 'https://ambetter.payment.softheon.com/guest/locate-account' }],
        idCardData: [
            { title: 'Tennessee', popUp: false, data: 'https://www.ambetteroftennessee.com/resources/new-members/use-your-benefits.html#carousel' },
            { title: 'Georgia', popUp: false, data: 'https://ambetter.pshpgeorgia.com/resources/new-members/use-your-benefits.html#' }],
        loginData: [
            { title: 'Tennessee', popUp: false, data: 'https://ambetterhealth.entrykeyid.com/as/authorization.oauth2?response_type=code&client_id=703a3749be2043d990e68da958725c04&scope=openid%20profile&state=dhXFkSMcMgwHW_O0nzXNb0wG_AnW0bSkwp9Qx67uToI%3D&redirect_uri=https://member.ambetterhealth.com/marketplace/login/oauth2/code/pingcloud&code_challenge_method=S256&nonce=usW-FIHIu3gUc45SIufgBfLRS2H6P921UxQh5H5tw5I&code_challenge=Y4nyafGGYHaT6ETL77JKcZ9NFAK3LUPSoTfJQVGBydA&app_origin=https://member.ambetterhealth.com/marketplace/login/oauth2/code/pingcloud&brand=ambetterhealth' },
            { title: 'Georgia', popUp: false, data: 'https://ambetterhealth.entrykeyid.com/as/authorization.oauth2?response_type=code&client_id=703a3749be2043d990e68da958725c04&scope=openid%20profile&state=8mmAh8nfQO5TjNQAcTKSDi8SqVZGOlsRFfAXn3gDhQc%3D&redirect_uri=https://member.ambetterhealth.com/marketplace/login/oauth2/code/pingcloud&code_challenge_method=S256&nonce=hpA2Ak1K137gPzQWPyIRt5L-dxD74GZym_iMbThLEMo&code_challenge=kwEVwyTOxaiiz7qiwOp75kj6a1jEo51mIxU8romMcBY&app_origin=https://member.ambetterhealth.com/marketplace/login/oauth2/code/pingcloud&brand=ambetterhealth' }],
        logo: 'https://s3.amazonaws.com/healthsherpa_photos/whitelabels/logo_images/000/037/693/original/AmbetterHeath_LogoTypeOnly_Small_RGB_tm.png?1666382717',
        key: this.name,
    },
    {
        name: 'ABA',
        claimsSupported: [],
        paymentData: [{ popUp: false, data: 'https://portal.abadmin.com/Logon/Registration.aspx' }],
        idCardData: [{ popUp: false, data: 'https://portal.abadmin.com/Logon/Registration.aspx' }],
        loginData: [{ popUp: false, data: 'https://portal.abadmin.com/Logon/Registration.aspx' }],
        logo: 'https://portal.abadmin.com/Logon/img/Reseller/ABA.png',
        key: this.name,
    }
];

export const documents = [
    {
        docName: 'Auto ID Card.pdf',
    },
    {
        docName: 'Auto Policy.pdf',
    },
    {
        docName: 'Home Policy.pdf',
    },
]

export const employees = [
    {
        name: 'Brian Peters',
        title: 'Managing Director',
        phone: '706-363-3206',
        email: 'bpeters@ais-ins.net',
    },
    {
        name: 'Dave Pennington',
        title: 'Managing Director',
        phone: '706-303-3953',
        email: 'davep@ais-ins.net',
    },
    {
        name: 'David Pennington',
        title: 'Managing Director',
        phone: '706-303-3859',
        email: 'dpennington@ais-ins.net',
    },
    {
        name: 'Cathy Lowe',
        title: 'Employee Benefits',
        phone: '706-309-0914',
        email: 'clowe@ais-ins.net',
    },
    {
        name: 'Mallory Fisher',
        title: 'Commercial Lines',
        phone: '706-305-4080',
        email: 'mfisher@ais-ins.net',
    },
    {
        name: 'Abby Chiesa',
        title: 'Personal Lines',
        phone: '706-309-0972',
        email: 'achiesa@ais-ins.net',
    },
    {
        name: 'Colby Britton',
        title: 'Personal Lines',
        phone: '706-309-0189',
        email: 'cbritton@ais-ins.net',
    }
]

export default {
    claimTypes,
    companies,
    documents,
    employees,
}