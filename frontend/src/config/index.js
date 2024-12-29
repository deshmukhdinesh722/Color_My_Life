import { lazy } from "react"


// yacaha use karun aapn multiple times khalil components use karu shakto 
export const RegisterFormControls=[
    {
        name:'userName',
        label:'User Name',
        placeholder:'Enter your User name',
        componentType:'input',
        type:'text',
    },
    {
        name:'email',
        label:'Email',
        placeholder:'Enter your Email',
        componentType:'input',
        type:'email',
    },
    {
        name:'password',
        label:'Password',
        placeholder:'Enter your Password',
        componentType:'input',
        type:'password',
    }
]

export const LoginFormControls=[

    {
        name:'email',
        label:'Email',
        placeholder:'Enter your Email',
        componentType:'input',
        type:'email',
    },
    {
        name:'password',
        label:'Password',
        placeholder:'Enter your Password',
        componentType:'input',
        type:'password',
    }
]

export const AdminPostFormElement=[
    {
        label:'Title',
        name:'title',
        componentType:'input',
        type:'text',
        placeholder:'Enter Post title'

    },
    {
        label:'Description',
        name:'description',
        componentType:'textarea',
        placeholder:'Enter Post description'
    },
    {
        label:'Category',
        name:'category',
        componentType:'select',
        options:[
            {id:"seasonal" , label:"Seasnoal"},
            {id:"food" , label:"Food"},
            {id:"shop" , label:"Shop"}


        ],
    }
]

export const AdminProductFormElement=[
    {
        label:'Title',
        name:'title',
        componentType:'input',
        type:'text',
        placeholder:'Enter Post title'

    },
    {
        label:'Description',
        name:'description',
        componentType:'textarea',
        placeholder:'Enter Post description'
    },
 {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
     
      {id:"seasonal" , label:"Seasonal"},
      {id:"food" , label:"Food"},
      {id:"shop" , label:"Shop"}
    ],
  },
    {
        label:'Price',
        name:'price',
        componentType:'input',
        type:'number',
        placeholder:'Enter Price '
    },
   
]

export const userViewHeader=[
   
    {
        id:'home',
        label:'Home',
        to:'/user-page/home'
    }, 
     {
        id:'galery',
        label:'Gallery',
        to:'/user-page/listing'
    }  ,
    {
        id:'package',
        label:'Packages',
        to:'/user-page/package'
    },
  
  
    {
        id:'contact',
        label:'Contact',
        to:'/user-page/contact'
    },
]

export const filterOptions={
    category:
    [
    {
        id:'seasonal',
        label:'Seasonal'
    },
    {
        id:'food',
        label:'Food',
    },
    {
        id:'shop',
        label:'Shop',
    },
]
}

export const sortOptions=[
    {
        id:'low-high',
        label:'Low to High'
    },
    {
        id:'high-low',
        label:'High to Low'
    },
    {
        id:'A-Z',
        label:'A to Z'
    },
    {
        id:'Z-A',
        label:'Z to A'
    }
]

export const SMMFormElement=[
    {
        label:'Daily Charges',
        name:'dailyCharges',
        componentType:'input',
        type:'text',
        placeholder:'Enter Daily Charges'

    },
    {
        label:'Monthly Charges',
        name:'monthlyCharges',
        componentType:'input',
        type:'text',
        placeholder:'Enter Monthly Charges'
    },
 {
    label: "Maximum Reaches",
    name: "maxReach",
    componentType: "input",
    type:'text',
    placeholder:'Enter Max reches'

    
  },
    
]

export const GDCFormElement=[
    {
        label:'Deasigning Title',
        name:'designingCharges',
        componentType:'input',
        type:'text',
        placeholder:'Enter Deasigning Title'

    },
    {
        label:'Price',
        name:'price',
        componentType:'input',
        type:'text',
        placeholder:'Enter Charges'
    },
 
    
]

export const SMPHFormElement=[
    {
        label:'Package',
        name:'packageS',
        componentType:'input',
        type:'text',
        placeholder:'Enter Package Name'

    },
    {
        label:'Price',
        name:'price',
        componentType:'input',
        type:'text',
        placeholder:'Enter Price'

    },
]



export const DAFormElement=[
    {
        label:'Premium Designing & Services Charges ',
        name:'designingCharges',
        componentType:'input',
        type:'text',
        placeholder:'Enter Premium Designing'

    },
    {
        label:'Price',
        name:'price',
        componentType:'input',
        type:'text',
        placeholder:'Enter Price'

    },
]

export const AddressFormElements=[
    {
        label:'Address',
        name:'address',
        componentType:'input',
        type:'text',
        placeholder:'Enter Address with in Karad Only'
    },
    {
        label:'Phone',
        name:'phone',
        componentType:'input',
        type:'text',
        placeholder:'Enter Phone Number'
    },    {
        label:'Extra (Optional)',
        name:'notes',
        componentType:'input',
        type:'text',
        placeholder:''
    },
] 

export const QuatationFormElements=[
    {
        label:'User Name',
        name:'userName',
        componentType:'input',
        type:'text',
        placeholder:'Enter Client Name'
    },
    {
        label:'User Id',
        name:'userId',
        componentType:'input',
        type:'text',
        placeholder:'Enter Client Id'
    }, 
    {
        label:'Subject',
        name:'subject',
        componentType:'input',
        type:'text',
        placeholder:'Enter Subject'
    },
   
    {
        label:'Sir/Mam',
        name:'sirMam',
        componentType:'input',
        type:'text',
        placeholder:'Sir/Mam'
    }, {
        label:'Content',
        name:'content',
        componentType:'textarea',
        placeholder:'Enter Content'
    },
    {
        label:'Total Cost',
        name:'cost',
        componentType:'input',
        type:'text',
        placeholder:'Enter Total Cost '
    },
] 