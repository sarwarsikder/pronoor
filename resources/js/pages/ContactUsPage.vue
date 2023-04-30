<template>
    <section class="section" id="contact">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    <div class="contact-head text-center">
                        <h4 class="title-heading text-uppercase">Contact us</h4>
                        <p class="title-desc text-muted mt-3">Find the perfect business template for any type of
                            business size. Browse be websites created for small businesses, such as online service
                            providers.</p>
                    </div>
                </div>
            </div>

            <div class="row mt-4 vertical-content">
                <div class="col-lg-12">
                    <div class="row mt-5">

                        <div class="col-lg-4">
                            <div class="contact-info">
                                <div class="mt-3">
                                    <div class="float-left">
                                        <i data-feather="mail"></i>
                                    </div>
                                    <div class="ml-5">
                                        <h6 class="text-muted">Email Address</h6>
                                        <p>Example@abc.com</p>
                                    </div>
                                </div>

                                <div class="mt-4">
                                    <div class="float-left">
                                        <i data-feather="phone-call"></i>
                                    </div>
                                    <div class="ml-5">
                                        <h6 class="text-muted">Phone number</h6>
                                        <p>+1-903-929-5705 , +1-631-705-0194</p>
                                    </div>
                                </div>

                                <div class="mt-4">
                                    <div class="float-left">
                                        <i data-feather="map-pin"></i>
                                    </div>
                                    <div class="ml-5">
                                        <h6 class="text-muted">Office Address</h6>
                                        <p>3961 Melville Street <br/>
                                            Bruceton, TN 38317</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-8">
                            <div class="custom-form">
                                <div id="message"></div>
                                <form method="post" action="php/contact.php" name="contact-form" id="contact-form">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <input name="name" id="name" type="text" class="form-control"
                                                       placeholder="Your name...">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <input name="email" id="email" type="email" class="form-control"
                                                       placeholder="Your email...">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input name="text" id="sub" type="text" class="form-control"
                                                       placeholder="Your subject...">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <textarea name="comments" id="comments" rows="4" class="form-control"
                                                          placeholder="Your message..."></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-lg-12">
                                            <input type="submit" id="submit" name="send"
                                                   class="submitBnt btn btn-custom" value="Send Message">
                                            <div id="simple-msg"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    name: "ContactUsPage"
}
</script>

<style scoped>

</style>
