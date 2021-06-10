const generatePDF = async(name)=>{
    const {PDFDocument,rgb} = PDFLib;
    const exBytes = await fetch("./certificate.pdf").then((res)=>{
        return res.arrayBuffer();
    });
    const font = await fetch("./fnt.ttf").then(res=>{
        return res.arrayBuffer();
    });

    
    
    

    const pdfDoc = await PDFDocument.load(exBytes);
   
    pdfDoc.registerFontkit(fontkit);
    const myFont = await pdfDoc.embedFont(font);
    const pages = pdfDoc.getPages();
    const firstPg = pages[0];
    firstPg.drawText(name,{
     x:300,
     y:280,
     size:45,
     font:myFont
    })
    const uri = await pdfDoc.saveAsBase64({dataUri:true})
    console.log(uri);   
    saveAs(uri,`${name}.pdf`,{autoBom:true});
    // document.querySelector("#mypdf").src = uri;

};

