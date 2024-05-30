

fetch('/ajax.php?cmd=jumlah&one=blog')
		.then(res => res.json())
		.then(data => getBlog(1, data.count))

let lastScroll = window.scrollY;

document.addEventListener("scroll", function(e){
	let nowScroll = window.scrollY;
	e.preventDefault();
	//document.getElementById("root").innerText = window.scrollY+" // ";
	// console.log(e);

	document.getElementById("tanah").style.backgroundPositionX = window.scrollY+"px";
	document.getElementById("konten-box").style.left = "-"+window.scrollY+"px";

	//lari
	document.getElementById("berdiri").style.display = "none";
	document.getElementById("lari").style.display = "block";

	if(nowScroll<lastScroll){
	document.getElementById("orang").style.transform= "scaleX(-1)"
}else{
document.getElementById("orang").style.transform= "scaleX(1)"
}
lastScroll = window.scrollY;
});

/*!
* Run a callback function after scrolling has stopped
* (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
* @param  {Function} callback The function to run after scrolling
*/
var scrollStop = function (callback) {

// Make sure a valid callback was provided
if (!callback || typeof callback !== 'function') return;

// Setup scrolling variable
var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function (event) {

// Clear our timeout throughout the scroll
window.clearTimeout(isScrolling);

// Set a timeout to run after scrolling ends
isScrolling = setTimeout(function() {

// Run the callback
callback();

}, 66);

}, false);

};

scrollStop(function () {
document.getElementById("berdiri").style.display = "block";
document.getElementById("lari").style.display = "none";
});

//React Mulai

class Blogku extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			items: [],
			num: 0,
		};
	}

	componentDidMount(){
		fetch('/ajax.php?cmd=blog&one='+this.props.start+'&two='+this.props.num)
		.then(res => res.json())
		.then(data => data.result.map(isi => (
			{
				id: `${isi.id}`,
				judul: `${isi.judul}`,
			}
		)))
		.then(items => this.setState({
			items
		}))
	}

	render(){
		const {items} = this.state;
		return(
			<div id="blog">
			{
				items.length>0 ? items.map(item =>{
					const {id, num, judul} = item;
					return(
						<div className="konten" id={"box-"+id} key={"key-"+id}>
							<div className="tiang kiri"></div>
								<div className="tiang kanan"></div>
								<div className="papan">
								<div className="papan-isi text-tengah">
									<h4 className="judul">{judul}</h4>
									<button className="btn-papan" id={"btn-"+id} onClick={() => baca(id)}>Baca</button>
								</div>
							</div>
							<div className="bunga-box">
								<div className="bunga"><img src="/asset/img/bunga.svg" /></div>
								<div className="bunga bungaa"><img src="/asset/img/bunga.svg" /></div>
								<div className="bunga"><img src="/asset/img/bunga.svg" /></div>
								<div className="bunga bungaa"><img src="/asset/img/bunga.svg" /></div>
								<div className="bunga"><img src="/asset/img/bunga.svg" /></div>
							</div>
						</div>
					);
				}):null
			}
			</div>
		);
	}
}

// getBlog(1,17);

function getBlog(mulai,jml){
    ReactDOM.render(
        <Blogku start={mulai} num={jml} />,
        document.getElementById("bloghzm")
    );
    if(window.screen.orientation.type.includes("landscape") === true){
        document.body.style.height = (1+(jml*58))+"vw";
        document.getElementById("konten-box").style.width = (58+(jml*58))+"vw";
        //document.getElementById("konten-box").scrollWidth;
    }else{
        document.body.style.height = (185+(jml*100))+"vw";
        document.getElementById("konten-box").style.width = (185+(jml*100))+"vw";
    }
}

class Artikel extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			items: [{
			    judul:"",
			    waktu:"",
			    isi:"",
			}],
			terakhir: "",
		};
		this.AmbilArtikel = this.AmbilArtikel.bind(this)
	}

	componentDidMount(){
		this.AmbilArtikel();
	}
	
	componentDidUpdate(){
	    this.AmbilArtikel();
	}
	
	AmbilArtikel(){
	    if((this.props.id !== this.state.terakhir)){
	        //console.log('artikel id update = '+this.props.id);
    		fetch('/ajax.php?cmd=baca&one='+this.props.id)
    		.then(res => res.json())
    		.then(items => this.setState({
        		items
    		}));
    		this.setState({
    		    terakhir : this.props.id
    		});
    // 		console.log("terakhir : ",this.state.terakhir);
	    }
	}
	
	

	render(){
		const {items} = this.state;
		let judulUrl = "";
		//console.log(items);
		if(items.judul){
		    document.title = items.judul+" | Blog Haizim.one";
		    judulUrl = items.judul.replaceAll("#","%23");
		}else{
		    document.title = "Blog Haizim.one";
		    judulUrl = "";
		}
 		
        // console.log("judul : ",items.judul);
		return(
		    <div id={"baca"+this.props.id}>
		        <h4>{items.judul}</h4>
		        <small>{items.waktu}</small>
		        <br/><br/>
		        <p dangerouslySetInnerHTML={{ __html:items.isi}}></p>
		        <br/>
		        <br/>
		        <center>
		        <h5>Bagikan:</h5>
		            <a target="_blank" href={"https://www.facebook.com/sharer.php?u=https://haizim.one/blog/"+this.props.id}>
                    	<button className="btn-papan" id={"fb-"+this.props.id}>
                    		<i className="fab fa-facebook-f"></i>
                    	</button>
                    </a>
                    
                    <a target="_blank" href={"https://twitter.com/intent/tweet?url=https://haizim.one/blog/"+this.props.id+"&text=Yuk baca "+judulUrl+" disini"}>
                    	<button className="btn-papan" id={"tw-"+this.props.id}>
                    		<i className="fab fa-twitter"></i>
                    	</button>
                    </a>
                    
                    <a target="_blank" href={"https://wa.me/?text=Yuk baca "+judulUrl+" disini%20|%20https://haizim.one/blog/"+this.props.id}>
                    	<button className="btn-papan" id={"wa-"+this.props.id}>
                    		<i className="fab fa-whatsapp"></i>
                    	</button>
                    </a>
                    
                    <a target="_blank" href={"https://lineit.line.me/share/ui?url=https://haizim.one/blog/"+this.props.id+"&text=Yuk baca "+judulUrl+" disini"}>
                    	<button className="btn-papan" id={"ln-"+this.props.id}>
                    		<i className="fab fa-line"></i>
                    	</button>
                    </a>
                    
                    <a target="_blank" href={"https://t.me/share/url?url=https://haizim.one/blog/"+this.props.id+"&text=Yuk baca "+judulUrl+" disini"}>
                    	<button className="btn-papan" id={"tg-"+this.props.id}>
                    		<i className="fab fa-telegram-plane"></i>
                    	</button>
                    </a>
		        </center>
		        <br/>
		    </div>
		)
	}
}

function baca(id){
	
	document.getElementById("bacabox").style.top = "0";
	
	ReactDOM.render(
		<h4>Memuat</h4>,
	    document.getElementById("baca")
		);
	
	ReactDOM.render(
		<Artikel id={id} />,
		document.getElementById("baca")
	);
	
	history.pushState({},"","https://haizim.one/blog/"+id)
}

function tutupBaca(){
	document.getElementById("bacabox").style.top = "-105vh";
	history.pushState({},"","https://haizim.one/blog/");
	document.title = "Blog Haizim.one";
	ReactDOM.render(
		<Artikel id="" />,
		document.getElementById("baca")
	);
}

const winpath = window.location.pathname;

if((winpath !== "/blog") && (winpath !== "/blog/")){
    baca(winpath.split("/")[2]);
}

