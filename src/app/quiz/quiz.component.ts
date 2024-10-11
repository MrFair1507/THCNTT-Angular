import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Để sử dụng ngModel
import { CommonModule } from '@angular/common'; // Để sử dụng ngModel cho binding dữ liệu

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import các module cần thiết
  templateUrl: './quiz.component.html',  // Đường dẫn tới file template HTML
  styleUrl: './quiz.component.css',  // Đường dẫn tới file CSS cho component này
})

export class QuizComponent {
  questions = [
     // Mảng chứa danh sách câu hỏi và câu trả lời tương ứng
    { question: 'what is capital of VietNam', answer: 'HaNoi' },
    {
      question: 'What is the most populous city in Vietnam? ',
      answer: 'Ho Chi Minh',
    },
    {
      question: 'What is the most developed tourism city in Vietnam?',
      answer: 'Ho Chi Minh',
    },
  ];
  // Biến lưu trữ chỉ số của câu hỏi hiện tại mà người dùng đang trả lời (bắt đầu từ 0)
  currentIndex: number = 0;  
  // Biến lưu câu hỏi hiện tại dựa trên chỉ số (currentIndex)
  currentQuestion: any = this.questions[this.currentIndex]; 
  // Biến lưu trữ đầu vào của người dùng (câu trả lời của người dùng)
  userInput: string = '';
  // Biến lưu trữ điểm số của người dùng (số câu trả lời đúng)
  score: number = 0;
  // Biến cờ để kiểm tra xem người dùng đã hoàn thành quiz hay chưa
  quizCompleted: boolean = false;

  checkAnswer(){
    // So sánh câu trả lời của người dùng với câu trả lời đúng
    if(this.userInput.toLowerCase().trim() === this.questions[this.currentIndex].answer.toLowerCase().trim()){
      this.score++;  // Nếu đúng, tăng điểm số
      this.nextQuestion() // Chuyển sang câu hỏi tiếp theo
    }
    this.userInput='';  // Xóa nội dung trong ô nhập sau khi kiểm tra
  }
// Phương thức chuyển sang câu hỏi tiếp theo
  nextQuestion(){
    this.currentIndex++;  // Tăng chỉ số câu hỏi hiện tại lên 1
    if(this.currentIndex < this.questions.length){
      // Nếu vẫn còn câu hỏi trong danh sách, cập nhật câu hỏi hiện tại
      this.currentQuestion= this.questions[this.currentIndex]
    }else {
      // Nếu không còn câu hỏi nào, đánh dấu quiz là đã hoàn thành
      this.currentQuestion=null; 
      this.quizCompleted = true; // Không còn câu hỏi nào để hiển thị
    }
  }
}

