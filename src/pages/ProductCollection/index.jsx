import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CollectionCard from "../../components/CollectionCard";
import FooterBtns from "../../components/FooterBtns";
import ListingDialogue from "../../components/ListingDialogue";
import ProductCreationFooter from "../../components/ProductCreationFooter";
import ProductCreationHeader from "../../components/ProductCreationHeader";
import { getSinglePrintfulProduct } from "../../redux/services/getSinglePrintfulProduct";
import { getPrintfulproduct } from "../../redux/services/getPrintfulProducts";
import { toast } from "react-toastify";

const ProductCollection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchitem, setSearchitem] = useState('')

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { singleProduct, loading, error, products, selectedDesignForProductCreation } = useSelector(
    (state) => state.printful
  );

  useEffect(() => {
    dispatch(getPrintfulproduct());
  }, [] );

  useEffect(() => {
    if(singleProduct?.product){
      setOpenModal(true);
    }
  }, [singleProduct]);

  const handleCardClick = (item) => {
    if(selectedDesignForProductCreation){
      setSelectedItem(item);
      setIsEdit(true);
      dispatch(getSinglePrintfulProduct(item.id));
      console.log("selected item ", item);
    } else {
      toast.error("No design selected for product creation.",{
        position: toast.POSITION.TOP_RIGHT,
        className: "toast__fiy",
      });
    }
  };

  const closeListingDialogue = () => {
    setOpenModal(false);
  }

  const handleSearchChange = (value) => {
    setSearchitem(value);
  }

  // const filteredProducts = products.filter(
  //   (item) => item.type_name.toLowerCase().includes(searchitem.toLowerCase())
  // );
  const displayedProducts = searchitem
  ? products.filter(
      (item) => item.type_name.toLowerCase().includes(searchitem.toLowerCase())
    )
  : products;
// console.log('displayedProducts')
// console.log(displayedProducts)

  return (
    <>
      <div className="px-8 mt-5">
        <ProductCreationHeader type="collection" onSearchChange={handleSearchChange} />
        <div className="my-[50px] flex flex-wrap justify-center gap-x-[25px] w-full">
          {loading ? (
            <span className="special-spinner h-24 w-24"></span>
          ) : (
            displayedProducts && displayedProducts?.length &&
            displayedProducts.map((item, index) => {
              return (
                <div
                  className={`my-[33px] w-[349px] h-[424px] p-4 rounded-[10px] ${
                    selectedItem && selectedItem.id === item.id
                      ? "border-2 border-[#FFFFFF]"
                      : ""
                  }`}
                  key={index}
                  onClick={() => handleCardClick(item)}
                >
                  <CollectionCard item={item} />
                </div>
              );
            })
          )}
        </div>
      </div>
      {!loading && openModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[100000]">
          <div
            className="absolute top-0 left-0 w-full h-full bg-dark-blue-1 opacity-80"
            onClick={() => setOpenModal(false)}
          ></div>
          <div className="text-base z-[100] bg-[#2c3135] rounded-lg h-[95%] border w-[90%] xl:w-[70%] text-center md:text-2xl overflow-scroll">
            <ListingDialogue
              singleProduct={singleProduct}
              closeListingDialogue={closeListingDialogue}
              designForProductCreation={selectedDesignForProductCreation}
            />
          </div>
        </div>
      )}
      <FooterBtns className="w-full px-2">
        <ProductCreationFooter
          edit={isEdit}
          selected={"collection"}
          leftBtnText="Go Back"
          rightBtnText=" Select Store"
          leftBtnClickHandler={() => navigate(-1)}
          rightBtnEnable={false}
          clearSelectionHandler={() => {
            setSelectedItem(null);
            setIsEdit(false);
          }}
        />
      </FooterBtns>
    </>
  );
};

export default ProductCollection;
