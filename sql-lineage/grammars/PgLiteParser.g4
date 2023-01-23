parser grammar PostgreSQLParser;


options { 
   tokenVocab = PostgreSQLLexer;
   superClass = PostgreSQLParserBase;
}

root
   : stmtblock EOF
   ;

stmtblock
   : stmtmulti
   ;

stmtmulti
   : (stmt SEMI?)*
   ;

stmt
   : createasstmt
   | insertstmt
   | selectstmt
   | updatestmt
   | viewstmt
   ;

selectstmt
   : select_no_parens
   | select_with_parens
   ;

select_with_parens
   : OPEN_PAREN select_no_parens CLOSE_PAREN
   | OPEN_PAREN select_with_parens CLOSE_PAREN
   ;

select_no_parens
   : select_clause opt_sort_clause (for_locking_clause opt_select_limit | select_limit opt_for_locking_clause)?
   | with_clause select_clause opt_sort_clause (for_locking_clause opt_select_limit | select_limit opt_for_locking_clause)?
   ;

select_clause
   : simple_select
   | select_with_parens
   ;

simple_select
   : ( SELECT (opt_all_clause into_clause opt_target_list | distinct_clause target_list)
           into_clause
           from_clause
           where_clause
           group_clause
           having_clause
           window_clause
       | values_clause
       | TABLE relation_expr
       | select_with_parens set_operator_with_all_or_distinct (simple_select | select_with_parens)
     )
        (set_operator_with_all_or_distinct (simple_select | select_with_parens))*
   ;

set_operator
   : UNION # union
   | INTERSECT # intersect
   | EXCEPT # except
   ;

set_operator_with_all_or_distinct
   : set_operator all_or_distinct
   ;

with_clause
   : WITH RECURSIVE? cte_list
   ;

cte_list
   : common_table_expr (COMMA common_table_expr)*
   ;

common_table_expr
   : name opt_name_list AS opt_materialized OPEN_PAREN preparablestmt CLOSE_PAREN
   ;


all_or_distinct
   : ALL
   | DISTINCT
   ;
