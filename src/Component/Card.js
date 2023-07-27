import React from "react";

//passing the parameter as props and getting the arguments as data in App.js file

function Card(props) {
  return (
    <div className="col-lg-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-uppercase text-center">
            {props.data.plan}
          </h5>
          <h6 class="card-price text-center">
            ${props.data.price}
            <span class="period">/month</span>
          </h6>
          <hr />

          {/* giving the details of userEnabler */}

          <ul className="fa-ul">
            <li className={props.data.userEnabler ? "" : "text-muted"}>
              <span className="fa-li">
                {" "}
                <i
                  className={
                    props.data.userEnabler ? "fas fa-check" : "fas fa-times"
                  }
                ></i>{" "}
              </span>
              {props.data.plan !== "FREE" ? (
                <b>{props.data.user}</b>
              ) : (
                <>{props.data.user}</>
              )}{" "}
            </li>

            {/* giving the details of storageEnabler */}

            <li className={props.data.storageEnabler ? "" : "text-muted"}>
              <span class="fa-li">
                <i
                  className={
                    props.data.storageEnabler ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>{" "}
              {props.data.storage}
            </li>

            {/* giving the details of publicprojectEnabler */}

            <li className={props.data.publicprojectEnabler ? "" : "text-muted"}>
              <span class="fa-li">
                <i
                  className={
                    props.data.publicprojectEnabler
                      ? "fas fa-check"
                      : "fas fa-times"
                  }
                ></i>
              </span>{" "}
              {props.data.publicprojects}
            </li>

            {/* giving the details of publicprojectEnabler */}

            <li className={props.data.communityEnabler ? "" : "text-muted"}>
              <span class="fa-li">
                <i
                  className={
                    props.data.communityEnabler
                      ? "fas fa-check"
                      : "fas fa-times"
                  }
                ></i>
              </span>{" "}
              {props.data.community}
            </li>

            {/* giving the details of privateprojectsEnabler */}

            <li
              className={props.data.privateprojectsEnabler ? "" : "text-muted"}
            >
              <span class="fa-li">
                <i
                  className={
                    props.data.privateprojectsEnabler
                      ? "fas fa-check"
                      : "fas fa-times"
                  }
                ></i>
              </span>{" "}
              {props.data.privaterojects}
            </li>

            {/* giving the details of phonesupportEnabler */}

            <li className={props.data.phonesupportEnabler ? "" : "text-muted"}>
              <span class="fa-li">
                <i
                  className={
                    props.data.phonesupportEnabler
                      ? "fas fa-check"
                      : "fas fa-times"
                  }
                ></i>
              </span>{" "}
              {props.data.phonesupport}
            </li>

            {/* giving the details of subdomainEnabler */}

            <li className={props.data.subdomainEnabler ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    props.data.subdomainEnabler
                      ? "fas fa-check"
                      : "fas fa-times"
                  }
                ></i>
              </span>
              {props.data.plan === "PRO" ? <b>Unlimited </b> : <></>}
              {props.data.subdomain}{" "}
            </li>

            {/* giving the details of reportsEnabler */}

            <li className={props.data.reportsEnabler ? "" : "text-muted"}>
              <span class="fa-li">
                <i
                  className={
                    props.data.reportsEnabler ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>{" "}
              {props.data.reports}
            </li>
          </ul>

          <div className="d-grid">
            <a
              href="javaScript(void)"
              className="btn btn-primary text-uppercase"
            >
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
//exporting the Card function
