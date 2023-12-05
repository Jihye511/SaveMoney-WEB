module.exports = {
  userList: `select * from user_table`,
  userInsert: `insert into user_table set ?`,
  userDelete : `DELETE FROM user_table WHERE kakao_id = ?`,
  checkIdDupli : `SELECT COUNT(*) AS count FROM user_table WHERE kakao_id = ?`,

  userLevel : `SELECT level FROM user_table WHERE kakao_id = ?`,

  postInsert: `INSERT INTO post (date, price, text, user_id) VALUES (?, ?, ?, ?)`,
  postList: `SELECT * FROM post`,

  commentInsert : `INSERT INTO comment_table (post_id, user_id, text, date) VALUES (?, ?, ?, ?)`,
  commentList : `SELECT * FROM comment_table WHERE post_id = ?`,

  calendarFind: `select * from post where date = ?`,
  calendarInsert: `INSERT INTO calendar_table (success_date) VALUES (?)`,

  // 임시로 과제에 사용했던 거 넣어둠
  // 이게 아마 개 많을 것으로 예상
};