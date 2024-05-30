class HeroContent extends HTMLElement {
    set coronaReport(item){
        this._coronaReport = item;
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="jumbotron jumbotron-fluid" id="home">
        <div class="container h-100">
            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-sm">
                    <div class="greetings">
                        Covid-19
                    </div>
                    <div class="introduce ml-1">
                        Coronaviruses(CoV) are a large family of viruses that cause illness ranging from the common cold to more severe diseases.
                    </div>

                    <div>
                        <a href="https://covid19.go.id/"
                            class="btn btn-danger mt-3" target="_blank">More Info</a>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="row">
                        <div class="col-12 fw-bolder">
                            Covid-19 in Indonesia report status :
                        </div>
                    </div>
                    <div class="row justify-content-center align-items-center">
                        <div class="col-4 h-100 p-5 d-flex text-white justify-content-center text-center fw-bolder" style="background-color:#800016;">
                            Confirmed
                            ${this._coronaReport.confirmed.value}
                        </div>
                        <div class="col-4 h-100 p-5 d-flex text-white justify-content-center text-center fw-bolder" style="background-color:#a0001c;">
                            Recovered
                            ${this._coronaReport.recovered.value}
                        </div>
                        <div class="col-4 h-100 p-5 d-flex text-white justify-content-center text-center text-bold fw-bolder" style="background-color:#c00021;">
                            Deaths
                            ${this._coronaReport.deaths.value}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
        `
    }
}

customElements.define('hero-content', HeroContent);