import React from "react";


const Buy = ({ properties }) => {

  return (
    <div>
      {/*  hero section */}
      <div className="hero-img">
        <div className="bg-dark-opacity"></div>
        <div className="relative px-12">
          <div className="flex justify-center items-center h-[378px]">
            <h2 className="hero-title">find your dream home</h2>
          </div>
        </div>
      </div>
      {/* custom shape */}
      <div className="custom-shape-divider-bottom-1686216144">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>


      {/*  <LazyLoadImage
            //alt={src}
            onLoad={() => console.log("onLoadText")}
            beforeLoad={() => console.log("beforeLoadText")}
            className="gallery-img"
            //effect="blur"
            height={384}
            key={src}
            //placeholderSrc={showLowResImages ? lowResSrc : null}
            //scrollPosition={scrollPosition}
            src={src}
            //threshold={threshold}
            width={512}
            //wrapperClassName="gallery-img-wrapper" 
      /> */}

      <div>
        {/* {properties.map((product)=>{
          return(
              <div key={product.id}>
                  <h1>{product.title}</h1>
              </div>
          )
      })} */}
      </div>
    </div>
  );
};

export default Buy;
