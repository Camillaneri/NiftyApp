# NiftyEvalue Documentation 
https://www.niftyvalue.com/team
## Purpose [Cami deve rivedere]
NiftyEvalue has been developed for evaluating the recommender system made by [NiftyValue's team](https://www.niftyvalue.com/team). Their [algorithm](https://www.niftyvalue.com/method) measures low-level features similarity of the NFTs liked and disliked by the user and returns those images that mostly represent the users' preferences. 
By interacting with the algorithm and answering some short questions about their attitudes and experience, we believe users will provide helpful information to understand how well the recommending system works from a human point of view.

## Research [Cami deve rivedere]
The first phase of our project consisted in the literarature research of previous case studies and evaluation of recommending systems. Here we tried to find those systems that better resembled the functionalities of the one we were going to evaluate; thus, we focused on papers describing recommending systems based on low-level features similarity, recommening digital objects like images and music. 

We followed Avazpour [et al.] study's classification of the dimensions used to evaluate a recommending system. We decided to focus our evaluation under a **user-centric** point of view, as many studies in the field have started to recognise the beneficial effects of end-users involvement to measure dimensions such as novelty, serendipity, and utility. 
Additionally, we detected two tools that were helpful in designing our evaluation:

* **ResQue's taxonomy**: by Pu et al., is a holistic study on user’s perceptions and impressions while interacting with a system;
* **Knijnensburg's framework**: Knijensburg et al. expand ResQue’s framework with context characteristics, employing personal and situational characteristics. This framework uses specific terms such as experience and interaction: to distinguish between attitude and behaviour.

For a deeper insight on our research please refeer to our [State of the Art document]()

## Design 
Following Knijnensburg, we decided to design our study as the triangulation of three main typologies of data:

1. **User characteristics**: gathered from surveys
2. **Subjective experience**: gathered from surveys
3. **Behavioural data**: gathered from log-data

**User characteristics**, the novelty item proposed by Knijnensburg et al. in their framework, are meaningful to us, as we had to consider the heterogeneity of people approaching NiftyEvalue and the differences in their education and attitude towards arts and Blockchain. 

**Subjective experience** refers to the opinion of the users on their interaction with NiftyEvalue and is the part of the experiment from which we expect to gather direct information on the user experience with the evaluated algorithm. 

**Behavioural data** consists of all that data automatically collected by the application. The user can not control the recording of this data. The application will consistently collect all valuable interactions of the user with the system. 


### Tasks [Cami deve rivedere]

Two tasks have been designed for the user to interact with NiftyValue's recommending system.

The first one, made for the user to get accustomed to our application is *Warm Up*. This first brief task consists of a set of 5 images that must be ordered from the most to the last similar, concerning the reference image. The main task is repeated as many times as one likes.

The *Main task* in our evaluation consists of multiple browsing sessions in which the user has to try NiftyValue's elicitation system to like and dislike the displayed images. The goal of this task is for the user to find aesthetically pleasing art-works and save them in the gallery on the left. 

### Surveys [Cami deve rivedere, se torna il discorso]

For collecting personal data we designed a first survey to gather user characteristics before starting the experiment. At the end of each task, the user will submit their opinion on the experience through some additional forms. 

The first survey aims at collecting user's characteristics. Here we are concerned with the education and experience with art, finance, and technology. The table below shows the questions we have selected. 

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

In this phase, we have better defined the most gripping dimension for our evaluation, i.e., the user *satisfaction* with their experience. We take into account the algorithm's misbehaviours, focusing on issues with the loaded images. Also, users' comments, might be investigated through sentiment analysis (we advise Syuzhet, an R library trained in the English vocabulary, easy to learn and used for performing sentiment analysis on blogs' comments). 


## Development

This section illustrates the development process. 

The website is structured into five main pages representing all the steps one has to follow to complete the experiment, plus a help page with links leading to NiftyValue's project website and the beta version of their application.

The header and navbar are not clickable as we do not want the user to freely browse our content, as it could mess up the experiment. Thus, **header** is composed by the application name and a button linking to the help page, while **navbar** works like breadcrumbs as t inform the user of their position in the application. 

### Api Queries [Cami deve rivedere]
To do

### Supabase [Chiara deve rivedere]
To set up the connection to Supabase, you need to create an account on their [website](https://supabase.com/) and sign-up. GitHub can be used for accessing it for the first time.

Then go on the project page and start a new project. 

![image info](/images/create_project.png)

After following all the steps for creating your project, you are provided with the url address of your project and the anon key for accessing it. 

To retrieve them click on your project and go to the settings as shown below.

![image info](/images/settings_page.png)

The next step consists in preparing the connection on the HTML through a .js file.
First, we copied Supabase's CND 
 `<script src="https://unpkg.com/@supabase/supabase-js"></script>` in the &lt;head> tag of `FirstSurvey.html`, `warmUp.html` and  `Task.html`.

Each one of the listed HTML pages is connected to a JSON file linking it to the right table that we want to fill with the correspective data.

We created tables on Supabase web interface
![image info](/images/create_table.png)

Tables columns may be created and modified by clicking on their names as shown below. 

![image info](/images/modify_column.png)
For example, `warmUp.html`'s survey results and log-data are managed by `supa_warmup.js`, in which, at line 3 we find this chunk of code:

`const supabase2 = createClient('project url', 'public anon key')`

The table in which the data is submitted, is here specified at the end of the code, at line 42:

`await supabase2.from('Warm_up').insert([submission])`

This is our standard procedure for adding data to Supabase, please feel free to modify it or connect the pages to your new project. 
      

### Homepage

**Page description**
The homepage file is **[index.html](https://github.com/Camillaneri/NiftyApp/blob/main/index.html)** here we present the application, providing information on NiftyValue, our experiment, how long it will keep to be finished and what will happen to the gathered data.

**Javascript description**
1. **scripts.js**
In this file, one can find a script in which a unique identifier is assigned to that user's session. <br>
The identifier is a string composed as follows: the actual date composed as DD/MM/YYYY concatenated as a string with a number N randomly chosen between 0 and 200. The final form is *DDMMYYYYN*. 

*[write about reveal function]*

### First survey
**Page description**
In this file, we built the first survey submitted to the user in a *pre-experimental* phase. <br>
The page is composed of a form contatining the questions listed in *[Design]()*. 
Questions from 1 to 3 have a check-list input, question 4 utilises a radio-button as input, and the last three questions consist of sliders for selecting a Likert scale value from 1 to 5. 

**Javascript description**
1. **FirstSurvey.js** contains jQuery code for the survey form, e.g., some code to block the submit button until all the check-lists and radio-buttons input groups have not been filled-up. 
2. **supa_survey1.js** is devolved to posting on the respective table on Supabase, the answers given by the user on this second page.

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

**Page description** [Chiara, Cami deve rivedere]
*[to do]*

**Javascript description**
1. **WUfunctions.js** *[to describe]* [Cami deve rivedere]
2. **WUrequests.js** *[to describe]* [Cami deve rivedere]
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

**Page description** [Chiara, Cami deve rivedere]
*[to do]*

**Javascript description**
1. **task.js** *[to describe]* [Cami deve rivedere]
2. **TaskTutorial.js** *[to describe]* [Cami deve rivedere]
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