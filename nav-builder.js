(function(){

  const $ = id => document.getElementById(id)
  
  const table = [{
    name:'Main',
    header:true,
    footer:true,
    link:'index.html#about'
  },{
    name:'Knowledge',
    header:true,
    footer:true,
    link:'knowledge.html'
  },{
    name:'Support',
    header:true,
    footer:true,
    link:'index.html#support'
  },{
    name:'FAQ',
    header:false,
    footer:true,
    link:'faq.html'
  }]

  function Builder(array){
    this.array = array
    this.active = ''
    
    this.setActive = function(active){
      this.active = active
      return this
    }

    this.init = function(){
      this.array.forEach(t => {
        t.active = false
        if(t.name === this.active){
          t.active = true
        }
      })
    }

    this.build = function(){
      this.init()
      $('header').innerHTML = this.headerTemplate()
      $('footer').innerHTML = this.footerTemplate()
      $('date').innerHTML = new Date().getFullYear()
      $('app').classList.remove('hide')
      return this
    }

    this.footerTemplate = function(){
      return `<div class="row">
              <div class="column col-full">
                <div class="footer-section">
                  ${ table.filter(t => t.footer).map(t => `<a href="${ t.link }">${ t.name }</a>`).join('' )}
                </div>
              </div>
            </div>
            <div class="row">
              <div class="column col-full" style="border-top: 2px solid red;margin-top:20px;padding: 50px;">
                <span>Copyright © <span id="date"></span> Mobile CAM CNC. All rights reserved.</span>
                <a href="privacy-policy.html" class="privacy">Privacy Policy</a>
              </div>
            </div>`
    }

    this.headerTemplate = function(){
      return `<div class="header">
                <a href="index.html" class="logo">Macro Mill Plus CNC</a>
                <nav class="header-right">
                  ${ this.array.filter(t => t.header).map(t => {
                    let add = ''
                    if(t.active) add = 'class="active"'
                    return `<a ${ add } href="${ t.link }">${ t.name }</a>`
                  }).join('' )}
                </nav>
              </div>`
    }
  }

  new Builder(table)
  .setActive('Knowledge')
  .build()
 


})()