(root (stmtblock (stmtmulti (stmt (selectstmt (select_no_parens (select_clause 
(simple_select select opt_all_clause into_clause 
    (opt_target_list (target_list (target_el (a_expr (a_expr_qual (a_expr_lessless 
        (a_expr_or (a_expr_and (a_expr_in (a_expr_unary_not (a_expr_isnull (a_expr_is_not 
            (a_expr_compare (a_expr_like (a_expr_qual_op 
                (a_expr_unary_qualop (a_expr_add (a_expr_mul 
                    (a_expr_caret (a_expr_unary_sign (a_expr_at_time_zone 
                        (a_expr_collate (a_expr_typecast (c_expr 
                            (columnref (colid (identifier a opt_uescape)) (indirection (indirection_el . 
                                (attr_name (collabel (identifier col1 opt_uescape)))))))))))))))))))))))))))) , 
                                    (target_el (a_expr (a_expr_qual (a_expr_lessless 
                                        (a_expr_or (a_expr_and (a_expr_in 
                                            (a_expr_unary_not (a_expr_isnull (a_expr_is_not 
                                                (a_expr_compare (a_expr_like (a_expr_qual_op 
                                                    (a_expr_unary_qualop (a_expr_add (a_expr_mul 
                                                        (a_expr_caret (a_expr_unary_sign (a_expr_at_time_zone 
                                                            (a_expr_collate (a_expr_typecast (c_expr 
                                                            (columnref (colid (identifier a opt_uescape)) 
                                                            (indirection (indirection_el . 
                                                            (attr_name (collabel (identifier col2 opt_uescape)))))))))))))))))))))))))))) , 
                                                            (target_el (a_expr (a_expr_qual (a_expr_lessless 
                                                            (a_expr_or (a_expr_and (a_expr_in (a_expr_unary_not (a_expr_isnull (a_expr_is_not 
                                                            (a_expr_compare (a_expr_like (a_expr_qual_op (a_expr_unary_qualop (a_expr_add (a_expr_mul 
                                                            (a_expr_caret (a_expr_unary_sign (a_expr_at_time_zone (a_expr_collate (a_expr_typecast (c_expr 
                                                            (columnref (colid (identifier a opt_uescape)) (indirection (indirection_el . 
                                                            (attr_name (collabel (identifier col3 opt_uescape)))))))))))))))))))))))))))))) 
                                                            into_clause (from_clause from (from_list 
                                                            (table_ref (relation_expr (qualified_name (colid (identifier intf opt_uescape)) 
                                                            (indirection (indirection_el . (attr_name (collabel (identifier tk_prod_day opt_uescape))))))) 
                                                            (opt_alias_clause (alias_clause (colid (identifier a opt_uescape))))))) 
                                                            where_clause group_clause having_clause window_clause)) opt_sort_clause))))) <EOF>)