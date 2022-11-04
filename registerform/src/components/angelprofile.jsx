import React,{ Component} from "react";

class Profile extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-4 bg-light">Menu</div>
                    <div className="col-8 bg-light">
                        <div className="row">
                            <div className="col-8 bg-light">Main</div>  
                            <div className="col-8 bg-light">Footer</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Profile;