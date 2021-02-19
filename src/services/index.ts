import * as apiCall from "./axios";
import * as stripe from "./stripe";

const services = {
  ...apiCall,
  ...stripe,
}

export default services