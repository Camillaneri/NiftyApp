# NiftyEvalue Documentation 

## Purpose 

NiftyEvalue has been developed for evaluating the recommender system made by NiftyValue's team. Their algorithm measures low-level features similarity of the NFTs liked and disliked by the user and returns those images that mostly represent the users preferences. 
By interacting with the algorithm and answering some short questions about their attitudes and experience, we believe users will provide helpful information in ordert to understand how well the reccomending system works under a human point of view.

## Research

The first phase of our project consisted in the research of previous case studies  and literature about the evaluation of recommending systems. Here we tried to find those systems that better represented the functionalities of the one we were going to evaluate, thus we focused on papers about recommending systems based on low-level features similarity and concerning digital objects such as images and music. 

We followed Avazpour et. al study's classification of the dimensions used for evaluating a recommending system and chose to study ours under an **user-centric** point of view, as at the state of the art, many studies in the field have started to recognize the beneficial effects of end-users's involvment in order to measure quantitatively dimensions such as novelty, serendipity and utility. 

Additionally we detected two tools that came helpful in designing our evaluation:

* **ResQue's taxonomy**: by Pu et al., is an holistic study on user’s perceptions and
impressions while interacting with a system;
* **Knijnensburg's framework**: by Knijensburg et al., expands ResQue’s framework to context characteristics by means of personal characteristics of a user and the situational ones,
in which the system is used. This framework uses specific terms as experience
and interaction, to distinguish between attitude and behaviour.

For a deeper insight on our research please refeer to our [State of the Art document]()

## Design 

Following Knijnensburg, we decided to design our study as the triangulation of three main typologies of data:

1. **User characteristics**: gathered from surveys
2. **Subjective experience**: gathered from surveys
3. **Behavioural data**: gathered from log-data

**User characteristics** represent the novelty item proposed by Knijnensburg et al. in their framework and it is important for us as we had to consider the ethrogrneity of people approaching NiftyEvalue and the diffrences in their education and attitude towards arts and Blockchain. 

**Subjective experience** refers to the opinion of the users on their interaction with NiftyEvalue and is the part of the experiment from which we expect to gather direct information on the user experience with the evaluated algorithm. 

**Behavioural data** consists in all that data automatically collected by the application, the user is not able to controll the recording of this data and it will consistently collect all valuable actions performed by our users as they interact with the system. 


### Tasks

Two tasks have been designed for the user to interact with NiftyValue's recommending system.

The first one, made for the user to get accostumed with our application is *Warm Up*. This first brief task consists in a set of 5 images to be ordered form the most to the last similar, with respect to a reference image. The task can be repeated as many times as one likes.

The *Main task* in our evaluation consists in mutiple browsing sessions in which the user has to try NiftyValue's elicitation system to like and dislike the showed images. The goal of this task is for the user to find aesthetically pleasing images and save them in the gallery on the left. 

### Surveys 

For collecting survey data we designed a first survey aiming at recordering user characteristics before the experiment starts, then at the end of each task the user will submit their opinion on their experience through some additional forms with questions concerning the tasks. 

The first survey aims at collecting user's characteristics, here what we are concerned about the education and experience with art, finance, and technology. The table below shows the question we have selected. 

| Question      | Answer input | Focus |
| ----------- | ----------- | ----------- |
| Do you work or have you worked in the traditional art world? | Multiple choiche checklist | Experience in the art world |
| Do you work or have worked with NFTs? | Multiple choiche checklist | Experience with NFTs |
| Do you work or have worked in finance and have experience with blockchain technologies? | Multiple choiche checklist | Experience in the finance world |
| How often do you use Multimedia Applications? | 5-points Likert scale (from "very often" to "never") | Experience with multimedia applications |
| It is hard for me to make plans. | 5-points Likert scale (from "strongly disagree to strongly agree) | Personal attitudes |
| I easily get bored. | 5-points Likert scale (from "strongly disagree" to "strongly agree") | Personal attitudes |
| I consider myself a curious person. | 5-points Likert scale (from "strongly disagree" to "strongly agree") | Personal attitudes |


The other surveys are submitted to the user after each task, as soon as she/he finishes it. We decided keep them as brief as possible with just 3 essential questions as listed below.

| Question      | Answer input | Focus |
| ----------- | ----------- | ----------- |
| On a scale from 1 to 5 how much satisfied are you after this task? | 5-points Likert scale | User satisfaction |
| Have you encountered one of the following issues?| Multiple choiche checklist | Issues with the algorithm |
| Do you have any additional comment? | Text | User's impressions |

In this phase we have better defined which dimension was thre most interesting in our evaluation, i.e., the user *satisfaction* with their experience. Also, we have choosen to account for algorithm's misbehaviour asking about possible issues with the loaded images and left some space for personal comment by the user, which might be investigated  through a sentiment analysis (we advice Syuzhet, an R library trained on the english vocaulary, easy to learn  and used for performing sentiment analysis on blogs' comments). 



## Development

This section illustrates the development process. 

The website is structured in 5 main pages representing all the steps one has to follow to complete the experiment, plus an help page with links leading to NiftyValue's project website and the beta version of their application.

Header and navbar are not clickable as we do not want the use to freely browse our content, as it could mess up the experiment. Thus, **header** is composed by the the application name and a butto linking to the help page, while **navbar** works like breadcrumbs as t inform the user on their position in the application. 

### Api Queries
To do
### Supabase
To set up the connection to supabase one needs to create an account on their [website](https://supabase.com/) and sign-up, git hub can be easily used for accessing it for the first time.

Then go on the project page and start  new project. 
![image info](/images/create_project.png)

After following all the steps for creating your project you will be provided the address of your project and the anon key for connecting to it. 

to retrieve them click on your project and go on the settings as showed below

![image info](/images/settings_page.png)

Next step consists in prepaing the connection on the html through a .js file.
First we copies Supabase's CND in the &lt;head> tag of `FirstSurvey.html`, `warmUp.html` and  `Task.html`.

 `<!-- Script to supabase -->`
 `<script src="https://unpkg.com/@supabase/supabase-js"></script>`





### Homepage

**Page description**
The homepage file is **[index.html](https://github.com/Camillaneri/NiftyApp/blob/main/index.html)** here we present the application, provifding information on NiftyValue, our experiment, how long it will keep to be finished and what will happen to the gathered data. 



**Javascript description**
1. scripts.js
In this file one can  find a script in which a unique identifier is assigned to that user's session. <br>
The identifier is a string composed as follow: the actual date composed as DD/MM/YYYY concatenated as a string with a number N randomly chosen between 0 and 200. The final form is: *DDMMYYYYN*. 

*[write about reveal function]*

### First survey

**Page description**
In this file we built the first survey submitted to the user in a *pre-experimanta* phase. <br>
The page is composed by a form composed by the 7 questions listed in *[Design]()*. 
Questions from 1 to 3 have as input a multiple-choice checklist, question 4 uses radio-button as input and the last 3 questions consist in sliders for selecting a likert scale value from 1 to 5. 

**Javascript description**
1. **FirstSurvey.js** contains jQuery code for the survey form, e.g., some code to block the submit button, untill the check-lists' and radio-button's input gropus have not been filled. 
2. **supa_survey1.js** is devolved to posting on the respective table on Supabase, the answers given by the user in this second page.

**Supabase data**
The table on Supabase related to the first survey is composed as follows:

| Column name   | Data type | Description |
| ----------- | ----------- | ----------- |
| Id          | int8        | User's unique identifier |
| ArtExp      | text        | User's experience in arts? |
| NftExp      | text        | User's experience with Non-Fungible Tokens |
| FinBcExp    | text        | User's experience in finance and with blockchain |
| useMM       | text        | How much time does the user spend on multimedia applications |
| Decision    | int8        | How indecisive is the user |
| Bore        | int8        | Hoe easily gets the user bored |
| Curios      | int8        | How curious is the user |

### Warm up

**Page description**
*[to do]*

**Javascript description**
1. **WUfunctions.js** *[to describe]*
2. **WUrequests.js** *[to describe]*
3. **supa_warmup.js** is devolved to posting on the respective table on Supabase, the log data and answers given by the user in the survey at the end of Warm Up.

**Supabase data**
The table on Supabase related to the Warm Up page is composed as follows:

| Column name   | Data type | Description |
| ----------- | ----------- | ----------- |
| Id          | int8        | User's unique identifier |
| refID       | json        | json containing round numbers as key and the id of the reference image as values |
| AIorder     | json        | json containing the number of round as key and the images’ ids ordered by similarity by the algorithm  as value |
| UserOrder   | json        | json containing the number of round as key and the images’ ids ordered by similarity by by the user as values |
| TimeXround | json         | json keeping track of the time in (ms) needed for each round |
| Satisfaction| int8        | value of satisfaction level given by users |
| Issues      | text        | list of possible issues with the algorithm |
| Comments    | text        | additional comments by user |


### Task

**Page description**
*[to do]*

**Javascript description**
1. **task.js** *[to describe]*
2. **TaskTutorial.js** *[to describe]*
3. **supa_task.js** is devolved to posting on the respective table on Supabase, the log data and answers given by the user in the survey at the end of the main task.

**Supabase data**
The table on Supabase related to the main task page is composed as follows:

| Column name   | Data type | Description |
| ----------- | ----------- | ----------- |
| Id          | int8        | User's unique identifier |
| n_queries       | int8        | Total number of queries performed by the user |
| queries_ids     | json        | Positive and negative inputs for each query sent by the user |
| myImgIds   | json        | String containing the ids of the images saved in the gallery at the end of the main task |
| myGallery_count   | json        | Count of total images in the personal gallery at the end of main task |
| displayedImgs   | json        | Count of enlarged images |
| TimeXquery | json         | json keeping track of the time in (ms) needed for each query |
| Satisfaction| int8        | value of satisfaction level given by users |
| Issues      | text        | List of possible issues with the algorithm |
| Comments    | text        | additional comments by user |


### End page

**Page description**
*[to do]*