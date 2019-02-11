# onboarding-skeleton
Js plugin that helps you guide users on a tour of your website

Gives you an easy way to customize how you want to guide your users to key functionalities on your site by just passing a js object or editing the css files 

## All you need to do
<ol>
<li>Add the onboarding-skeleton.css and onboarding-skeleton.js files to your html file</li>
<li>follow the structure for onboarding element as specified</li>
<li>add classes to your onboarding area</li>
<li>make the <i><strong>onboardingSkeleton</strong></i> object available to onboarding-skeleton.js</li>
<li>done</li>
</ol>

### How to use

    <div class="your-custom-class">
        <div class="onboarding-skel"> 
            <span class="onboarding-tip"></span>
            <p>
                Your content
                Lorem Ipsum is simply dummy text of the printingand
                typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and 
                scrambled it to make a type specimen book.
            </p>
        </div>
    </div>

When user starts tour you will have additional elements appended to each `<div class="onboarding-skel">`

create the onboardingSkeleton{}
- tips{} carry description for each tip
- shade{}, container{} and arrow{}, refer to the additional elements
- the properties in these objects (shade{}, container{} and arrow{}) are the style css properties in js so make sure you follow the syntax for syntax (background-color(css) == backgroundColor(js))
- You can also use the css to 

<code>
    
    let onboardingSkeleton = {
         tips: {
                0: 'Hey! welcome... to...',
                1: 'use this area for ....',
                2: 'use this area for ...',
                3: 'use this area for ...',
                4: 'use this area for..',
                5: 'use this area for...'
            },
            shade:{
                backgroundColor: 'hsl(240, 50%, 50%, 0.7)'
            },
            container:{
                backgroundColor: 'springgreen'
            },
            arrow:{
                backgroundColor: 'springgreen'
            }
    }

</code>

