import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthGuard, LoginGuard } from "./components";
import ListingDialogue from "./components/ListingDialogue";
import ProductLoading from "./components/ProductLoading";
import { FluidLayout, MainLayout, UserLayout } from "./layouts";
import {
  Aboutus,
  AskGPT,
  ChangePassword,
  ChoosePlatform,
  ChooseProdutcs,
  Drops,
  Financial,
  Home,
  Howito,
  Howitworks,
  ManageAccount,
  NTF,
  Payment,
  PaymentInformation,
  Pricing,
  Privacy,
  Profile,
  ResetPassword,
  Settings,
  SignIn,
  SignUp,
  SingleComplete,
  SingleDrop,
  SingleInput,
  Upload,
  VerifyNumber,
} from "./pages";
import ProductCollection from "./pages/ProductCollection";
import ProductCreation from "./pages/ProductCreation";
import DynamicMetaTags from "./DynamicMetaData";
import { routeToMetaInfo } from "./utils/data";

const App = () => {
  const splashScreen = ["/", "/login", "/register", "/vertify-number"];
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkLayout = () => {
      const currentRoute = location.pathname;
      const isSplashScreen = splashScreen.includes(currentRoute);
      console.log(currentRoute);

      if (!isSplashScreen) {
        if (window.innerWidth < 768) {
          toast.warn("Please use desktop for a better experience.", {
            position: toast.POSITION.TOP_RIGHT,
            className: "toast__fiy",
          });
        }
      }
    };

    checkLayout();
  }, [location, navigate]);

  useEffect(() => {
    let title = routeToMetaInfo?.[location.pathname]?.title;
    let description = routeToMetaInfo?.[location.pathname]?.description;

    if(!title){
      title = routeToMetaInfo?.['/']?.title;
      description = routeToMetaInfo?.['/']?.description;
    }

    document.title = title;

    const metaTags = [
      { name: 'description', content: description },
    ];

    const head = document.head;

    metaTags.forEach(({ name, content }) => {
      const existingTag = head.querySelector(`meta[name="${name}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', content);
      } else {
        const newTag = document.createElement('meta');
        newTag.setAttribute('name', name);
        newTag.setAttribute('content', content);
        head.appendChild(newTag);
      }
    });
    
  }, [location.pathname]);

  return (
    <Routes>
      {/* <DynamicMetaTags/> */}
      <Route path="/product-creation" element={<ProductCreation />} />
      <Route path="/product-collection" element={<ProductCollection />} />
      <Route path="/listing-dialogue" element={<ListingDialogue />} />
      <Route path="/product-loading" element={<ProductLoading />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
      </Route>
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/" element={<FluidLayout />}>
        <Route
          path="login"
          element={
            <LoginGuard>
              <SignIn />
            </LoginGuard>
          }
        />
        <Route
          path="register"
          element={
            <LoginGuard>
              <SignUp />
            </LoginGuard>
          }
        />
        <Route
          path="reset__password"
          element={
            <LoginGuard>
              <ResetPassword />
            </LoginGuard>
          }
          Title
        />
        <Route
          path="vertify-number"
          element={
            <LoginGuard>
              <VerifyNumber />
            </LoginGuard>
          }
        />
      </Route>
      <Route path="" element={<UserLayout />}>
        <Route
          path="single-input"
          element={
            <AuthGuard>
              <SingleInput />
            </AuthGuard>
          }
        />
        <Route path="ask-ai" element={<AskGPT />} />
      </Route>
      <Route path="" element={<UserLayout noHeader={true} />}>
        <Route
          path="choose-platform"
          element={
            <AuthGuard>
              <ChoosePlatform />
            </AuthGuard>
          }
        />
        <Route
          path="choose-products"
          element={
            <AuthGuard>
              <ChooseProdutcs />
            </AuthGuard>
          }
        />
        <Route
          path="upload-products/"
          element={
            <AuthGuard>
              <Upload />
            </AuthGuard>
          }
        />
        <Route
          path="upload-products/:selectedVariantId"
          element={
            <AuthGuard>
              <Upload />
            </AuthGuard>
          }
        />
        <Route
          path="profile"
          element={
            <AuthGuard>
              <Profile />
            </AuthGuard>
          }
        />
        <Route
          path="settings"
          element={
            <AuthGuard>
              <Settings />
            </AuthGuard>
          }
        />
        <Route
          path="settings/payment"
          element={
            <AuthGuard>
              <Payment />
            </AuthGuard>
          }
        />
        <Route path="settings/privacy" element={<Privacy />} />
        <Route
          path="settings/payment/information"
          element={
            <AuthGuard>
              <PaymentInformation />
            </AuthGuard>
          }
        />
        <Route
          path="settings/manage-account"
          element={
            <AuthGuard>
              <ManageAccount />
            </AuthGuard>
          }
        />
        <Route
          path="settings/change-password"
          element={
            <AuthGuard>
              <ChangePassword />
            </AuthGuard>
          }
        />
        <Route
          path="drops"
          element={
            <AuthGuard>
              <Drops />
            </AuthGuard>
          }
        />
        <Route
          path="drops/:id"
          element={
            <AuthGuard>
              <SingleDrop />
            </AuthGuard>
          }
        />
        <Route
          path="drops/complete/:id"
          element={
            <AuthGuard>
              <SingleComplete />
            </AuthGuard>
          }
        />
        <Route
          path="financial"
          element={
            <AuthGuard>
              <Financial />
            </AuthGuard>
          }
        />
        <Route
          path="/ntf/:variantId"
          element={
            <AuthGuard>
              <NTF />
            </AuthGuard>
          }
        />
      </Route>

      <Route path="/About-us" element={<Aboutus />} />

      <Route path="/privacy" element={<Privacy />} />
      {/* <Route path="/plan1sucess" element={<Plan1sucess />} />
      <Route path="/plan2sucess" element={<Plan2sucess />} />
      <Route path="/plan3sucess" element={<Plan3sucess />} />
      <Route path="/plan4sucess" element={<Plan4sucess />} /> */}

      <Route path="/How-it-works" element={<Howitworks />} />
      <Route path="/How-it" element={<Howito />} />
      <Route path="*" element={<h1>Not Found Page...!</h1>} />
    </Routes>
  );
};

export default App;
