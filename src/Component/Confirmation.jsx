import React from "react";
import { Toast } from "bootstrap";

function Confirmation () {
    return (
        <Toast>
<Toast.Header>
<strong className="mr-auto">Your order is in the oven</strong>
<small>Just now</small>
</Toast.Header>
<Toast.Body>
    Your delicious pizza will be with you in 30 minutes!
</Toast.Body>
</Toast>
    )
}
export default Confirmation;