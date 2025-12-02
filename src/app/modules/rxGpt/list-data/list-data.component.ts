import { Component } from '@angular/core';

@Component({
  selector: 'app-list-data',
  standalone: true,
  imports: [],
  templateUrl: './list-data.component.html',
  styleUrl: './list-data.component.css'
})
export class ListDataComponent {



 content: string = 'Machine learning plays a crucial role in spam email detection by identifying patterns and characteristics that distinguish spam from legitimate emails. It involves several key steps: 1. **Feature Extraction**: Algorithms analyze various aspects of emails like sender information, subject lines, email content (keywords, phrases, unusual characters), links, and attachments to extract relevant features. 2. **Training Data**: A large dataset of both known spam and legitimate (ham) emails is used to train a machine learning model. This data is labeled to indicate whether each email is spam or not. 3. **Classification Algorithms**: Algorithms such as Naive Bayes, Support Vector Machines (SVMs), Decision Trees, or neural networks are trained on this data to learn the intricate relationships between features and the likelihood of an email being spam. 4. **Model Deployment**: Once trained, the model is deployed to filter incoming emails. It predicts whether a new email is spam or not based on the features it extracts. 5. **Continuous Learning**: Spam tactics evolve, so machine learning models are continuously updated and retrained with new data to maintain their effectiveness and adapt to emerging spam patterns.';
  
 //  it's need to handle.

 content2: string = 'Supervised machine learning is a type of machine learning where an algorithm learns from a labeled dataset. This dataset includes input features and their corresponding correct output values. The goal is for the algorithm to learn a mapping function from the input to the output so that it can make accurate predictions on new, unseen data. Think of it like a student learning from a teacher who provides both the problem and the correct answer. **Example: Spam Email Detection** Imagine you want to build a system to identify spam emails. You would start with a large dataset of emails, where each email is "labeled" as either "spam" or "not spam." * **Input Features:** These could include words in the email (e.g., "discount," "free," "winner"), sender address, presence of suspicious links, email length, etc. * **Labeled Output:** For each email, you have a label indicating whether its spam or not. A supervised learning algorithm (like a Naive Bayes classifier or a Support Vector Machine) would be trained on this labeled dataset. It learns patterns and relationships between the email features and their spam/not-spam labels. Once trained, the model can then be used to predict whether a *new*, incoming email is spam or not, based on its features.';

 // The main types of Machine Learning are: 1. Supervised Learning (learning from labeled data), 2. Unsupervised Learning (finding patterns in unlabeled data), and 3. Reinforcement Learning (learning through trial and error with rewards and penalties).
 strList: string[] | undefined;


   ngOnInit(): void {
 
     this.strList = this.content2.split('**');

     console.log ('this.strList', this.strList)

     // 1, 3, 5

     this.strList.forEach(element => {

      
      
     });
     
  }


}
