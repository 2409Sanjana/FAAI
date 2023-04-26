const elements =(
    <div className="row p-2 ">
        <div className="card col-3">
            <img src="./CoconutOil.jpg"/>
 
            <div className="card-body">
                <h5 className="card-title">Coconut Oil</h5>
                <p className="card-text">Rs. 400</p>
            
            </div>
        </div>
        <div className="card col-3">
        <img src="./EyeDrop.png"/>
 
            <div className="card-body">
                <h5 className="card-title">Eye Drop</h5>
                <p className="card-text">Rs. 99</p>
            
            </div>
        </div>
        <div className="card col-3">
        <img src="./neemOil.jpg"/>
 
            <div className="card-body">
                <h5 className="card-title">Neem Oil</h5>
                <p className="card-text">Rs. 300</p>
            
            </div>
        </div>
        <div className="card col-3">
        <img src="./CoconutOil.jpg"/>
 
            <div className="card-body">
                <h5 className="card-title">Tomato</h5>
                <p className="card-text">Rs. 40</p>
            
            </div>
        </div>
    </div>
    )

ReactDOM.render(elements,document.getElementById("root"))