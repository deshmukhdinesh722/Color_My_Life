import paypal from 'paypal-rest-sdk'

paypal.configure({
    mode:'sandbox',
    client_id: "AWvau8ejQAnZCc8qXchxTj6mBpiyksnCyb7Cxn2m1oCKz-NEFNEdE5nv2mHSISRhzGnnLSRmDePFRVDD",
    client_secret: "ECxkpNk5tAYbz0eNZl2orGw9ubVd1ZIX4leT8cPmYPUC5d3G-PbZX4KetBBQKTT0_df6BaTd2oPzv7jR"
}) 


export {paypal}


// ONLY FOR PRACTICE