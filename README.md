This bank loan calculator allows the user to input a loan amount, an interest percentage and the amount of years to repay the loan back. The results display a monthly repayment fee, a total repayment fee and a total of the interest owed.

The markup is fairly simple with forms and input groups for the user to insert their data. The styling mainly consists of utilising bootstrap classes inc. containers, padding, margins and prepends.

The JavaScript is fairly succinct. It uses the DOM to select HTML elements, basic math forumlae to calculate results and timeout for an error if the user does not input any numbers.

The second half of the UI is not visible until the 3 boxes are filled. This was achieved by using a submit function on addEventListener. A 'loader' image is used to create an effect where the calculator is actually 'calculating' the result.
