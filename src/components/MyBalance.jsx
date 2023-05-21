import CountUp from "react-countup";
import Logo from "../../images/logo.svg";

export function MyBalance() {
  return (
    <header className="my-balance | flex-group">
      <div>
        <p>My balance</p>
        <span className="my-balance__amount">
          <CountUp
            end={921.48}
            duration={2.5}
            separator=","
            decimal="."
            prefix="$"
            decimals={2}
          />
        </span>
      </div>
      <img className="logo" src={Logo} alt="" />
    </header>
  );
}
