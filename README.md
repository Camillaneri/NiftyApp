# Documentation 

## NiftyEvalue



### Purpose 

NiftyEvalue has been developed for evaluating the recommender system made by NiftyValue's team. Their algorithm measures low-level features similarity of the NFTs liked and disliked by the user and returns those images that mostly represent the users preferences. 
By interacting with the algorithm and answering some short questions about their attitudes and experience, we believe users will provide helpful information in ordert to understand how well the reccomending system works under a human point of view.

### Research

The first phase of our project consisted in the research of previous case studies  and literature about the evaluation of recommending systems. Here we tried to find those systems that better represented the functionalities of the one we were going to evaluate, thus we focused on papers about recommending systems based on low-level features similarity and concerning digital objects such as images and music. 

We followed Avazpour et. al study's classification of the dimensions used for evaluating a recommending system and chose to study ours under an **user-centric** point of view, as at the state of the art, many studies in the field have started to recognize the beneficial effects of end-users's involvment in order to measure quantitatively dimensions such as novelty, serendipity and utility. 

Additionally we detected two tools that came helpful in designing our evaluation:

* **ResQue's taxonomy**: by Pu et al., is an holistic study on user’s perceptions and
impressions while interacting with a system;
* **Knijnensburg's framework**: by Knijensburg et al., expands ResQue’s framework to context characteristics by means of personal characteristics of a user and the situational ones,
in which the system is used. This framework uses specific terms as experience
and interaction, to distinguish between attitude and behaviour.

For a deeper insight on our research please refeer to our [State of the Art document]()

### Design 

Following Knijnensburg, we decided to design our study as the triangulation of three main typologies of data:

1. **User chatacteristics**: gathered from surveys
2. **Subjective experience**: gathered from surveys
3. **Behavioural data**: gathered from log-data

**User characteristics** represent the novelty item proposed by Knijnensburg et al. in their framework and it is important for us as we had to consider the ethrogrneity of people approaching NiftyEvalue and the diffrences in their education and attitude towards arts and Blockchain. 

**Subjective experience** refers to the opinion of the users on their interaction with NiftyEvalue and is the part of the experiment from which we expect to gather direct information on the user experience with the evaluated algorithm. 

**Behavioural data** consists in all that data automatically collected by the application, the user is not able to controll the recording of this data and it will consistently collect all valuable actions performed by our users as they interact with the system. 

For collecting survey data we designed a first survey aiming at recordering user characteristics before the experiment starts, then at the end of each task the user will submit their opinion on their experience through some additional forms with questions concerning the tasks. 

#### Surveys 

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
| On a scale from 1 to 5 how much satisfied are you after this task? |5-points Likert scale | User satisfaction |
| Have you encountered one of the following issues?| Multiple choiche checklist | Issues with the algorithm |
| Do you have any additional comment? | Text | User's impressions |

As one can notice, in this phase we have better drfined which dimension we were more interested in during our evaluation, i.e., the user *satisfaction* with their experience. Also, we have choosen to account for algorithm's misbehaviour asking about possible issues with the loaded images and left some space for personal comment by the user, which might be investigated  through a sentiment analysis (we advice Syuzhet, an R library trained on the english vocaulary, easy to learn  and used for performing the sentiment analysis on blogs' comments). 



### Development

#### Website

#### Api Queries

#### esults
