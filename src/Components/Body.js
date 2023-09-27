


export const Body =()=>{
    return(
        <div className="container-fix" id="Body">
            <div className="row">
              <div id="Prod">Our Products :</div>
                <div className="col-4" id="col1">
                    <button className='btn fw-medium' id="button1"><img src="./Laptop logo.webp" alt="Laptops picture" id="laptop"/></button>                    
                    <div id="lap">Laptops</div>

                </div>
                <div className="col-4" id="col2">
                    <button className='btn fw-medium' id="button2"><img src="https://images.unsplash.com/photo-1614285457768-646f65ca8548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Keybords & mouses picture" id="Keymouse"/></button>
                    <div id="Key">Keyboards & Mouses</div>
                </div>
                <div className="col-4" id="col3">
                    <button className='btn fw-medium' id="button3"><img src="./Monitors logo.webp" alt="Monitors picture" id="Monitors"/></button>
                    <div id="Moni">Monitors</div>
                </div>
            </div>
        </div>
    );
}