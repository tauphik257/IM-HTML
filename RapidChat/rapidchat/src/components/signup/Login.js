const Login = () => {
    return (
        <section class="vh-100">
            <div class="mask d-flex align-items-center  h-100 gradient-custom- mt-3 ">

                <div class="container h-100">

                    <div class="row d-flex justify-content-center align-items-center h-100">

                        <div class="col-12 col-md-9 col-lg-7 col-xl-6 w-100">
                            <div class="d-flex shadow p-3 mb-5 bg-body rounded">

                                <div class="card-body p-5">
                                    <h2 class="text-center mb-5 text-primary">SIGN IN</h2>

                                    <form>

                                        <div class="form-outline mb-4">

                                            <input type="text" class="form-control form-control-lg rounded-pill" placeholder="Your Name"/>

                                        </div>

                                        <div class="form-outline mb-4">

                                            <input type="gmail"  class="form-control form-control-lg rounded-pill" placeholder="Email" />
                                        </div>
                                        <div class="form-outline mb-4">

                                            <input type="text" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  class="form-control form-control-lg rounded-pill" placeholder="Mobile" />
                                        </div>

                                        <div class="form-outline mb-4">

                                            <input type="password" id="form3Example4cg" class="form-control form-control-lg rounded-pill" placeholder="Password" />

                                        </div>

                                        <div class="d-flex justify-content-left">
                                            <button type="button"
                                                class="btn btn-success btn-lg m-2 rounded-pill">REGISTER</button>
                                            <button type="button"
                                                class="btn btn-primary btn-lg  m-2 rounded-pill button">LOG IN</button>
                                        </div>


                                    </form>

                                </div>
                                <img src="image/laptop.jpg" className=" m-5 h-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}
export default Login;