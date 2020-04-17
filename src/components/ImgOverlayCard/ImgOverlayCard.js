import React from 'react';

const ImgOverlayCard = () => {
    return (
        <div className="card card-cascade wider">

            <div className="view view-cascade overlay">
                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo6.jpg" alt="Card image cap"/>
                    <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                    </a>

                    <div className="card-body card-body-cascade text-center">


                        <h4 className="card-title"><strong>Alison Belmont</strong></h4>

                        <h5 className="blue-text pb-2"><strong>Graffiti Artist</strong></h5>

                        <p className="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
    laudantium, totam rem aperiam. </p>


                        <a className="px-2 fa-lg li-ic"><i className="fab fa-linkedin-in"></i></a>

                        <a className="px-2 fa-lg tw-ic"><i className="fab fa-twitter"></i></a>

                        <a className="px-2 fa-lg fb-ic"><i className="fab fa-facebook-f"></i></a>

                    </div>
            </div>
        </div>
      )
}

export default ImgOverlayCard;

            {/* <div className="card card-cascade wider">

  
  <div className="view view-cascade overlay">
    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo6.jpg" alt="Card image cap">
    <a href="#!">
      <div className="mask rgba-white-slight"></div>
    </a>
  </div>

  
  <div className="card-body card-body-cascade text-center">

    
    <h4 className="card-title"><strong>Alison Belmont</strong></h4>
    
    <h5 className="blue-text pb-2"><strong>Graffiti Artist</strong></h5>
    
    <p className="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam. </p>

    
    <a className="px-2 fa-lg li-ic"><i className="fab fa-linkedin-in"></i></a>
    
    <a className="px-2 fa-lg tw-ic"><i className="fab fa-twitter"></i></a>
    
    <a className="px-2 fa-lg fb-ic"><i className="fab fa-facebook-f"></i></a>

  </div>

</div> */}
