import React, { useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "삼성노트북",
      price: 1000,
    },
    {
      id: 2,
      productName: "LG노트북",
      price: 2000,
    },
    {
      id: 3,
      productName: "한성노트북",
      price: 3000,
    },
    {
      id: 4,
      productName: "HP노트북",
      price: 4000,
    },
  ]);

  //단일 상품정보 관리 상태값 정의하기
  const [product, setProduct] = useState({
    id: 0,
    productName: "",
    price: 0,
  });

  const handleSelect = (e) => {
    console.log("handleSelect11", {
      id: e.id,
      productName: e.productName,
      price: e.price,
    });

    // 입력값 초기화
    setProduct({
      id: e.id,
      productName: e.productName,
      price: e.price,
    });
  };

  const handleProduct = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleRemove = (e) => {
    console.log("handleRemove", e);
    const updatedProducts = products.filter((product) => product.id !== e.id);

    // 상태 업데이트
    setProducts(updatedProducts);
  };
  const handleSave = (e) => {
    // 새로운 제품 정보
    const newProduct = {
      id: products.length + 1, // 새로운 제품의 ID는 기존 제품 수 + 1
      productName: product.productName,
      price: product.price,
    };

    // 새로운 제품을 기존 제품 목록에 추가하고 상태 업데이트
    setProducts((prevProducts) => [...prevProducts, newProduct]);

    // 입력값 초기화
    setProduct({
      id: 0,
      productName: "",
      price: 0,
    });
  };

  return (
    <div>
      <br></br>
      신규 제품 등록 : 제품명:
      <input
        type="text"
        name="productName"
        value={product.productName}
        placeholder="제품명"
        onChange={handleProduct}
      />
      가격:
      <input
        type="text"
        name="price"
        value={product.price}
        placeholder="0"
        onChange={handleProduct}
      />
      <button onClick={handleSave}>저장</button>
      <hr></hr>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>제품번호</th>
            <th>제품명</th>
            <th>가격</th>
            <th>선택</th>
            <th>삭제</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p, i) => (
            <tr key={i}>
              <td>{p.id}</td>
              <td>{p.productName}</td>
              <td>{p.price}</td>
              <td>
                <button onClick={() => handleSelect(p)}>선택</button>
              </td>
              <td>
                <button onClick={() => handleRemove(p)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
