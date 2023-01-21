(root 
    (stmtblock 
        (stmtmulti 
            (stmt 
                (selectstmt 
                    (select_no_parens 
                        (select_clause 
                            (simple_select select opt_all_clause into_clause 
                                (opt_target_list 
                                    (target_list 
                                        (target_el 
                                            (a_expr 
                                                (a_expr_qual 
                                                    (a_expr_lessless 
                                                        (a_expr_or 
                                                            (a_expr_and 
                                                                (a_expr_in 
                                                                    (a_expr_unary_not 
                                                                        (a_expr_isnull 
                                                                            (a_expr_is_not 
                                                                                (a_expr_compare 
                                                                                    (a_expr_like 
                                                                                        (a_expr_qual_op 
                                                                                            (a_expr_unary_qualop 
                                                                                                (a_expr_add (a_expr_mul (a_expr_caret (a_expr_unary_sign (a_expr_at_time_zone (a_expr_collate (a_expr_typecast (c_expr (aexprconst (sconst (anysconst 'hello world') opt_uescape)))))))))))))))))))))))))) 
                                                                                                into_clause 
                                                                                                from_clause 
                                                                                                where_clause 
                                                                                                group_clause 
                                                                                                having_clause 
                                                                                                window_clause)) 
                                                                                                opt_sort_clause))))) <EOF>)