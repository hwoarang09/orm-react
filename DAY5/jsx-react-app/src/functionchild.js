import React, { useEffect } from "react";
import PropTypes from "prop-types";

const FunctionChild = ({ sample, setSample, userid }) => {
  useEffect(() => {
    setSample("응바까밭");
  }, [sample]);

  return <div>응 props = {sample}</div>;
};
FunctionChild.propTypes = {
  // 숫자 타입이며 필수로 전달되어야 함
  sample: PropTypes.isRequired,
};

export default FunctionChild;
