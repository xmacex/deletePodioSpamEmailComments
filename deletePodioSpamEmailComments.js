// Add the user id to remove in here. There is a good chance it is
// a six-digit number
var spamUid = '550819';

// Consider only comments made after this date
var spamDate = new Date(2018, 04, 01);

var spamUserUrl = 'https://podio.com/users/' + spamUid;

var mnum = {
    'January': 0,
    'February': 1,
    'March': 2,
    'April': 3,
    'May': 4,
    'June': 5,
    'July': 6,
    'August': 7,
    'September': 8,
    'October': 9,
    'November': 10,
    'December': 11
}

var titleToDate = (title) => {
    re = /(\s*\d*) ([A-Za-z]*) (\d{4}) (\d*):(\d*)/;
    [, D, M, Y, h, m] = re.exec(title);
    d = new Date(Y, mnum[M], D, h, m);
    return d;
}

var throttling = 2000;

var spamComments = jQuery('.comment')
    .filter((i, c) => jQuery(c).find('.comment_byline > a')[0].href == spamUserUrl)
    .filter((i, c) => jQuery(c).find('.timestamp > time')[0].title != "")
    .filter((i, c) => titleToDate(jQuery(c).find('.timestamp > time')[0].title) > spamDate);

console.log("Found " + spamComments.length + " comments to delete");

spamComments.each((i, c) => {
    c.style.border = '5px red dotted';
    setTimeout(() => {
	console.log("deleting 💩", c.dataset.commentId, c);
	jQuery(c).find('.js-delete-comment').click();
	setTimeout(() => {
	    jQuery('.confirm-button')[0].click();
	}, 100);
    }, i * throttling);
});
