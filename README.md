## Tailwind 설정

- 설치
    
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    ```
    
- tailwind 초기화 및 설정 파일 수정
  - 초기화
        
      ```bash
      npx tailwindcss init -p
      ```
        
  - 설정 파일 수정
    - content : tailwind가 적용될 경로 목록과 확장자를 지정
    - ./pages/**/*.{ts,tsx}
      - 페이지 하위에 있는 모든 폴더에 속한 모든 파일 중 확장자가 ts, tsx인 것
      - ./pages/**/*.tsx 이렇게도 가능
        
        ```javascript
        module.exports = {
            content: ['./pages/**/*.{ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
           theme: {
             extend: {},
           },
           plugins: [],
        };
        ```

## Tailwind 익스텐션 설치
- Tailwind CSS IntelliSense
