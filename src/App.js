import React from "react";
import Card from "./Component/Card";
import "./index.css";
function App() {
  //giving the details of three cards
  let plans = [
    {
      plan: "Free",
      price: "0",
      user: "Single User",
      userEnabler: true,
      storage: "5GB Storage",
      storageEnabler: true,
      publicprojects: "Unlimited Public Projects ",
      publicprojectEnabler: true,
      community: "Comminity Access ",
      communityEnabler: true,
      privaterojects: "Unlimited Private Projects ",
      privateprojectsEnabler: false,
      phonesupport: "Dedicated Phone Support ",
      phonesupportEnabler: false,
      subdomain: "Free Subdomain",
      subdomainEnabler: false,
      reports: "Monthly Status Reports ",
      reportsEnabler: false,
    },

    {
      plan: "plus",
      price: "9",
      user: "5 Users",
      userEnabler: true,
      storage: "5GB Storage",
      storageEnabler: true,
      publicprojects: "Unlimited Public Projects ",
      publicprojectEnabler: true,
      community: "Comminity Access ",
      communityEnabler: true,
      privaterojects: "Unlimited Private Projects ",
      privateprojectsEnabler: true,
      phonesupport: "Dedicated Phone Support ",
      phonesupportEnabler: true,
      subdomain: "Free Subdomain",
      subdomainEnabler: true,
      reports: "Monthly Status Reports ",
      reportsEnabler: false,
    },

    {
      plan: "PRO",
      price: "49",
      user: "Unlimited Users",
      userEnabler: true,
      storage: "150GB Storage",
      storageEnabler: true,
      publicprojects: "Unlimited Public Projects ",
      publicprojectEnabler: true,
      community: "Comminity Access ",
      communityEnabler: true,
      privaterojects: "Unlimited Private Projects ",
      privateprojectsEnabler: true,
      phonesupport: "Dedicated Phone Support ",
      phonesupportEnabler: true,
      subdomain: "Free Subdomain",
      subdomainEnabler: true,
      reports: "Monthly Status Reports ",
      reportsEnabler: true,
    },
  ];

  return (
    <div>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {/* <Card data={plans[0]} 
            <Card data={plans[1]} />
            <Card data={plans[2]} /> */}

            {/* map method is used to get all the plans iterated .. instead of sending one by one*/}

            {plans.map((e, i) => {
              return <Card data={e} key={i} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
