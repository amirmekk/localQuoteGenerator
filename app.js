var inspiringQuote = [["The best preparation for tomorrow is doing your best today." , "H. Jackson Brown, Jr"],
 	["Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible." , "Francis of Assisi" ],
 	["Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.", "Steve Jobs" ],
 	["Believe you can and you're halfway there.", "Theodore Roosevelt"],
 	["Put your heart, mind, and soul into even your smallest acts. This is the secret of success.", "Swami Sivananda"],
 	["Today I choose life. Every morning when I wake up I can choose joy, happiness, negativity, pain... To feel the freedom that comes from being able to continue to make mistakes and choices - today I choose to feel life, not to deny my humanity but embrace it.", "Kevyn Aucoin"],
 	["When the sun is shining I can do anything; no mountain is too high, no trouble too difficult to overcome.", "Wilma Rudolph"],
 	["I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'", "Muhammad Ali"],
	["Your big opportunity may be right where you are now.", "Napoleon Hill"],
 	["If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.", "Bruce Lee"]] ,
    successQuote =[["Success means doing the best we can with what we have. Success is the doing, not the getting; in the trying, not the triumph. Success is a personal standard, reaching for the highest that is in us, becoming all that we can be." , "Zig Ziglar"] ,
    ["Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." , "Herman Cain" ],
    ["Do not be embarrassed by your failures, learn from them and start again.", "Richard Branson" ],
    ["Victory is sweetest when you’ve known defeat.", "Malcolm S. Forbes"],
    ["Action is the foundational key to all success.", "Pablo Picasso" ],
    ["The best years of your life are the ones in which you decide your problems are your own. You do not blame them on your mother, the ecology, or the president. You realize that you control your own destiny.", "Albert Ellis" ],
    ["Success is going from failure to failure without losing enthusiasm.", "Winston Churchill" ],
    ["If you want to make an easy job seem mighty hard, just keep putting off doing it.", "Olin Miller" ],
    ["Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.", "Lucille Ball" ],
    ["Success does not consist in never making mistakes but in never making the same one a second time.", "George Bernard Shaw" ]] ,
    positiveQuote = [["Winners make a habit of manufacturing their own positive expectations in advance of the event." , "Brian Tracy"] ,
    [ "In order to carry a positive action, we must develop here a positive vision." , "Dalai Lama" ],
    ["Believe that life is worth living and your belief will help create the fact." , "William James" ],
    ["Winning is fun, but those moments that you can touch someone’s life in a very positive way are better." , "Tim Howard"],
    ["Virtually nothing is impossible in this world if you just put your mind to it and maintain a positive attitude." , "Lou Holtz"],
    ["Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough" , "Oprah Winfrey"],
    ["The only time you fail is when you fall down and stay down." , "Stephen Richards"],
    ["It will never rain roses: when we want to have more roses, we must plant more roses." , "George Eliot"],
    ["Being brave enough to be alone frees you up to invite people into your life because you want them and not because you need them." , "Mandy Hale"],
    ["Mind is a flexible mirror, adjust it, to see a better world." , "Amit Ray"]] ,
    motivationalQuote = [["If you want to achieve greatness stop asking for permission." , "Anonymous"] ,
    ["If you are not willing to risk the usual you will have to settle for the ordinary." , "Jim Rohn" ],
    ["Opportunities don't happen, you create them.", "Chris Grosser" ],
    ["Don't raise your voice, improve your argument.", "Anonymous"],
    ["No masterpiece was ever created by a lazy artist.", "Anonymous"],
    ["There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.", "Ray Goforth"],
    ["I find that the harder I work, the more luck I seem to have.", "Thomas Jefferson"],
    ["All progress takes place outside the comfort zone.", "Michael John Bobak"],
    ["The only place where success comes before work is in the dictionary.", "Vidal Sassoon"],
    ["To live a creative life, we must lose our fear of being wrong.", "Anonymous"]] ,
    colors = ['#c0392b' , '#d35400' , '#f39c12' , '#7f8c8d' , '#2c3e50' , '#9b59b6' , '#3498db' , '#27ae60'] ,
    allQuote = inspiringQuote.concat(successQuote , positiveQuote , motivationalQuote) ;
    var quoteSelector = Math.floor(Math.random() * 10)+1  ;
$(document).ready(
	$("#quote").html(allQuote[quoteSelector][0]) ,
	$("#quoteTeller").html("– " +allQuote[quoteSelector][1]),
	$(".All").click(function(){
		$("#quote").html(allQuote[Math.floor(Math.random() * 40)+1][0]),
		$("#quoteTeller").html("– " +allQuote[Math.floor(Math.random() * 40)+1][1],
		$("body").animate({backgroundColor : colors[Math.floor(Math.random() * 8)] } , 800)) 
	}),
	$("#inspiring").click(function(){
		$("#quote").html(inspiringQuote[quoteSelector][0]),
		$("#quoteTeller").html("– " +inspiringQuote[quoteSelector][1],
		$("body").animate({backgroundColor : colors[Math.floor(Math.random() * 8)] } , 800))
	}),
	$("#Success").click(function(){
		$("#quote").html(successQuote[quoteSelector][0]),
		$("#quoteTeller").html("– " +successQuote[quoteSelector][1],
		$("body").animate({backgroundColor : colors[Math.floor(Math.random() * 8)] } , 800))
	}),
	$("#Positive").click(function(){
		$("#quote").html(positiveQuote[quoteSelector][0]),
		$("#quoteTeller").html("– " +positiveQuote[quoteSelector][1],
		$("body").animate({backgroundColor : colors[Math.floor(Math.random() * 8)] } , 800))
	}),
	$("#Motivational").click(function(){
		$("#quote").html(motivationalQuote[quoteSelector][0]),
		$("#quoteTeller").html("– " +motivationalQuote[quoteSelector][1],
		$("body").animate({backgroundColor : colors[Math.floor(Math.random() * 8)] } , 800))
	}) , 
	setInterval(function(){quoteSelector += 1 ; if(quoteSelector > 10){quoteSelector = 0}} , 1000) 
	

)
