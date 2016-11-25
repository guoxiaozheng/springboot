package cn.sumpay.accountant.model;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class CasBankBalanceCheckExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public CasBankBalanceCheckExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("ID is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("ID is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(String value) {
            addCriterion("ID =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(String value) {
            addCriterion("ID <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(String value) {
            addCriterion("ID >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(String value) {
            addCriterion("ID >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(String value) {
            addCriterion("ID <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(String value) {
            addCriterion("ID <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLike(String value) {
            addCriterion("ID like", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotLike(String value) {
            addCriterion("ID not like", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<String> values) {
            addCriterion("ID in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<String> values) {
            addCriterion("ID not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(String value1, String value2) {
            addCriterion("ID between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(String value1, String value2) {
            addCriterion("ID not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andBalanceDateIsNull() {
            addCriterion("BALANCE_DATE is null");
            return (Criteria) this;
        }

        public Criteria andBalanceDateIsNotNull() {
            addCriterion("BALANCE_DATE is not null");
            return (Criteria) this;
        }

        public Criteria andBalanceDateEqualTo(String value) {
            addCriterion("BALANCE_DATE =", value, "balanceDate");
            return (Criteria) this;
        }

        public Criteria andBalanceDateNotEqualTo(String value) {
            addCriterion("BALANCE_DATE <>", value, "balanceDate");
            return (Criteria) this;
        }

        public Criteria andBalanceDateGreaterThan(String value) {
            addCriterion("BALANCE_DATE >", value, "balanceDate");
            return (Criteria) this;
        }

        public Criteria andBalanceDateGreaterThanOrEqualTo(String value) {
            addCriterion("BALANCE_DATE >=", value, "balanceDate");
            return (Criteria) this;
        }

        public Criteria andBalanceDateLessThan(String value) {
            addCriterion("BALANCE_DATE <", value, "balanceDate");
            return (Criteria) this;
        }

        public Criteria andBalanceDateLessThanOrEqualTo(String value) {
            addCriterion("BALANCE_DATE <=", value, "balanceDate");
            return (Criteria) this;
        }

        public Criteria andBalanceDateLike(String value) {
            addCriterion("BALANCE_DATE like", value, "balanceDate");
            return (Criteria) this;
        }

        public Criteria andBalanceDateNotLike(String value) {
            addCriterion("BALANCE_DATE not like", value, "balanceDate");
            return (Criteria) this;
        }

        public Criteria andBalanceDateIn(List<String> values) {
            addCriterion("BALANCE_DATE in", values, "balanceDate");
            return (Criteria) this;
        }

        public Criteria andBalanceDateNotIn(List<String> values) {
            addCriterion("BALANCE_DATE not in", values, "balanceDate");
            return (Criteria) this;
        }

        public Criteria andBalanceDateBetween(String value1, String value2) {
            addCriterion("BALANCE_DATE between", value1, value2, "balanceDate");
            return (Criteria) this;
        }

        public Criteria andBalanceDateNotBetween(String value1, String value2) {
            addCriterion("BALANCE_DATE not between", value1, value2, "balanceDate");
            return (Criteria) this;
        }

        public Criteria andPreBalanceIsNull() {
            addCriterion("PRE_BALANCE is null");
            return (Criteria) this;
        }

        public Criteria andPreBalanceIsNotNull() {
            addCriterion("PRE_BALANCE is not null");
            return (Criteria) this;
        }

        public Criteria andPreBalanceEqualTo(BigDecimal value) {
            addCriterion("PRE_BALANCE =", value, "preBalance");
            return (Criteria) this;
        }

        public Criteria andPreBalanceNotEqualTo(BigDecimal value) {
            addCriterion("PRE_BALANCE <>", value, "preBalance");
            return (Criteria) this;
        }

        public Criteria andPreBalanceGreaterThan(BigDecimal value) {
            addCriterion("PRE_BALANCE >", value, "preBalance");
            return (Criteria) this;
        }

        public Criteria andPreBalanceGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("PRE_BALANCE >=", value, "preBalance");
            return (Criteria) this;
        }

        public Criteria andPreBalanceLessThan(BigDecimal value) {
            addCriterion("PRE_BALANCE <", value, "preBalance");
            return (Criteria) this;
        }

        public Criteria andPreBalanceLessThanOrEqualTo(BigDecimal value) {
            addCriterion("PRE_BALANCE <=", value, "preBalance");
            return (Criteria) this;
        }

        public Criteria andPreBalanceIn(List<BigDecimal> values) {
            addCriterion("PRE_BALANCE in", values, "preBalance");
            return (Criteria) this;
        }

        public Criteria andPreBalanceNotIn(List<BigDecimal> values) {
            addCriterion("PRE_BALANCE not in", values, "preBalance");
            return (Criteria) this;
        }

        public Criteria andPreBalanceBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("PRE_BALANCE between", value1, value2, "preBalance");
            return (Criteria) this;
        }

        public Criteria andPreBalanceNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("PRE_BALANCE not between", value1, value2, "preBalance");
            return (Criteria) this;
        }

        public Criteria andDayDebtorAmountIsNull() {
            addCriterion("DAY_DEBTOR_AMOUNT is null");
            return (Criteria) this;
        }

        public Criteria andDayDebtorAmountIsNotNull() {
            addCriterion("DAY_DEBTOR_AMOUNT is not null");
            return (Criteria) this;
        }

        public Criteria andDayDebtorAmountEqualTo(BigDecimal value) {
            addCriterion("DAY_DEBTOR_AMOUNT =", value, "dayDebtorAmount");
            return (Criteria) this;
        }

        public Criteria andDayDebtorAmountNotEqualTo(BigDecimal value) {
            addCriterion("DAY_DEBTOR_AMOUNT <>", value, "dayDebtorAmount");
            return (Criteria) this;
        }

        public Criteria andDayDebtorAmountGreaterThan(BigDecimal value) {
            addCriterion("DAY_DEBTOR_AMOUNT >", value, "dayDebtorAmount");
            return (Criteria) this;
        }

        public Criteria andDayDebtorAmountGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("DAY_DEBTOR_AMOUNT >=", value, "dayDebtorAmount");
            return (Criteria) this;
        }

        public Criteria andDayDebtorAmountLessThan(BigDecimal value) {
            addCriterion("DAY_DEBTOR_AMOUNT <", value, "dayDebtorAmount");
            return (Criteria) this;
        }

        public Criteria andDayDebtorAmountLessThanOrEqualTo(BigDecimal value) {
            addCriterion("DAY_DEBTOR_AMOUNT <=", value, "dayDebtorAmount");
            return (Criteria) this;
        }

        public Criteria andDayDebtorAmountIn(List<BigDecimal> values) {
            addCriterion("DAY_DEBTOR_AMOUNT in", values, "dayDebtorAmount");
            return (Criteria) this;
        }

        public Criteria andDayDebtorAmountNotIn(List<BigDecimal> values) {
            addCriterion("DAY_DEBTOR_AMOUNT not in", values, "dayDebtorAmount");
            return (Criteria) this;
        }

        public Criteria andDayDebtorAmountBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("DAY_DEBTOR_AMOUNT between", value1, value2, "dayDebtorAmount");
            return (Criteria) this;
        }

        public Criteria andDayDebtorAmountNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("DAY_DEBTOR_AMOUNT not between", value1, value2, "dayDebtorAmount");
            return (Criteria) this;
        }

        public Criteria andDayCreditorAmountIsNull() {
            addCriterion("DAY_CREDITOR_AMOUNT is null");
            return (Criteria) this;
        }

        public Criteria andDayCreditorAmountIsNotNull() {
            addCriterion("DAY_CREDITOR_AMOUNT is not null");
            return (Criteria) this;
        }

        public Criteria andDayCreditorAmountEqualTo(BigDecimal value) {
            addCriterion("DAY_CREDITOR_AMOUNT =", value, "dayCreditorAmount");
            return (Criteria) this;
        }

        public Criteria andDayCreditorAmountNotEqualTo(BigDecimal value) {
            addCriterion("DAY_CREDITOR_AMOUNT <>", value, "dayCreditorAmount");
            return (Criteria) this;
        }

        public Criteria andDayCreditorAmountGreaterThan(BigDecimal value) {
            addCriterion("DAY_CREDITOR_AMOUNT >", value, "dayCreditorAmount");
            return (Criteria) this;
        }

        public Criteria andDayCreditorAmountGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("DAY_CREDITOR_AMOUNT >=", value, "dayCreditorAmount");
            return (Criteria) this;
        }

        public Criteria andDayCreditorAmountLessThan(BigDecimal value) {
            addCriterion("DAY_CREDITOR_AMOUNT <", value, "dayCreditorAmount");
            return (Criteria) this;
        }

        public Criteria andDayCreditorAmountLessThanOrEqualTo(BigDecimal value) {
            addCriterion("DAY_CREDITOR_AMOUNT <=", value, "dayCreditorAmount");
            return (Criteria) this;
        }

        public Criteria andDayCreditorAmountIn(List<BigDecimal> values) {
            addCriterion("DAY_CREDITOR_AMOUNT in", values, "dayCreditorAmount");
            return (Criteria) this;
        }

        public Criteria andDayCreditorAmountNotIn(List<BigDecimal> values) {
            addCriterion("DAY_CREDITOR_AMOUNT not in", values, "dayCreditorAmount");
            return (Criteria) this;
        }

        public Criteria andDayCreditorAmountBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("DAY_CREDITOR_AMOUNT between", value1, value2, "dayCreditorAmount");
            return (Criteria) this;
        }

        public Criteria andDayCreditorAmountNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("DAY_CREDITOR_AMOUNT not between", value1, value2, "dayCreditorAmount");
            return (Criteria) this;
        }

        public Criteria andDayCertificateIsNull() {
            addCriterion("DAY_CERTIFICATE is null");
            return (Criteria) this;
        }

        public Criteria andDayCertificateIsNotNull() {
            addCriterion("DAY_CERTIFICATE is not null");
            return (Criteria) this;
        }

        public Criteria andDayCertificateEqualTo(BigDecimal value) {
            addCriterion("DAY_CERTIFICATE =", value, "dayCertificate");
            return (Criteria) this;
        }

        public Criteria andDayCertificateNotEqualTo(BigDecimal value) {
            addCriterion("DAY_CERTIFICATE <>", value, "dayCertificate");
            return (Criteria) this;
        }

        public Criteria andDayCertificateGreaterThan(BigDecimal value) {
            addCriterion("DAY_CERTIFICATE >", value, "dayCertificate");
            return (Criteria) this;
        }

        public Criteria andDayCertificateGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("DAY_CERTIFICATE >=", value, "dayCertificate");
            return (Criteria) this;
        }

        public Criteria andDayCertificateLessThan(BigDecimal value) {
            addCriterion("DAY_CERTIFICATE <", value, "dayCertificate");
            return (Criteria) this;
        }

        public Criteria andDayCertificateLessThanOrEqualTo(BigDecimal value) {
            addCriterion("DAY_CERTIFICATE <=", value, "dayCertificate");
            return (Criteria) this;
        }

        public Criteria andDayCertificateIn(List<BigDecimal> values) {
            addCriterion("DAY_CERTIFICATE in", values, "dayCertificate");
            return (Criteria) this;
        }

        public Criteria andDayCertificateNotIn(List<BigDecimal> values) {
            addCriterion("DAY_CERTIFICATE not in", values, "dayCertificate");
            return (Criteria) this;
        }

        public Criteria andDayCertificateBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("DAY_CERTIFICATE between", value1, value2, "dayCertificate");
            return (Criteria) this;
        }

        public Criteria andDayCertificateNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("DAY_CERTIFICATE not between", value1, value2, "dayCertificate");
            return (Criteria) this;
        }

        public Criteria andEndBalanceIsNull() {
            addCriterion("END_BALANCE is null");
            return (Criteria) this;
        }

        public Criteria andEndBalanceIsNotNull() {
            addCriterion("END_BALANCE is not null");
            return (Criteria) this;
        }

        public Criteria andEndBalanceEqualTo(BigDecimal value) {
            addCriterion("END_BALANCE =", value, "endBalance");
            return (Criteria) this;
        }

        public Criteria andEndBalanceNotEqualTo(BigDecimal value) {
            addCriterion("END_BALANCE <>", value, "endBalance");
            return (Criteria) this;
        }

        public Criteria andEndBalanceGreaterThan(BigDecimal value) {
            addCriterion("END_BALANCE >", value, "endBalance");
            return (Criteria) this;
        }

        public Criteria andEndBalanceGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("END_BALANCE >=", value, "endBalance");
            return (Criteria) this;
        }

        public Criteria andEndBalanceLessThan(BigDecimal value) {
            addCriterion("END_BALANCE <", value, "endBalance");
            return (Criteria) this;
        }

        public Criteria andEndBalanceLessThanOrEqualTo(BigDecimal value) {
            addCriterion("END_BALANCE <=", value, "endBalance");
            return (Criteria) this;
        }

        public Criteria andEndBalanceIn(List<BigDecimal> values) {
            addCriterion("END_BALANCE in", values, "endBalance");
            return (Criteria) this;
        }

        public Criteria andEndBalanceNotIn(List<BigDecimal> values) {
            addCriterion("END_BALANCE not in", values, "endBalance");
            return (Criteria) this;
        }

        public Criteria andEndBalanceBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("END_BALANCE between", value1, value2, "endBalance");
            return (Criteria) this;
        }

        public Criteria andEndBalanceNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("END_BALANCE not between", value1, value2, "endBalance");
            return (Criteria) this;
        }

        public Criteria andBankBalanceIsNull() {
            addCriterion("BANK_BALANCE is null");
            return (Criteria) this;
        }

        public Criteria andBankBalanceIsNotNull() {
            addCriterion("BANK_BALANCE is not null");
            return (Criteria) this;
        }

        public Criteria andBankBalanceEqualTo(BigDecimal value) {
            addCriterion("BANK_BALANCE =", value, "bankBalance");
            return (Criteria) this;
        }

        public Criteria andBankBalanceNotEqualTo(BigDecimal value) {
            addCriterion("BANK_BALANCE <>", value, "bankBalance");
            return (Criteria) this;
        }

        public Criteria andBankBalanceGreaterThan(BigDecimal value) {
            addCriterion("BANK_BALANCE >", value, "bankBalance");
            return (Criteria) this;
        }

        public Criteria andBankBalanceGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("BANK_BALANCE >=", value, "bankBalance");
            return (Criteria) this;
        }

        public Criteria andBankBalanceLessThan(BigDecimal value) {
            addCriterion("BANK_BALANCE <", value, "bankBalance");
            return (Criteria) this;
        }

        public Criteria andBankBalanceLessThanOrEqualTo(BigDecimal value) {
            addCriterion("BANK_BALANCE <=", value, "bankBalance");
            return (Criteria) this;
        }

        public Criteria andBankBalanceIn(List<BigDecimal> values) {
            addCriterion("BANK_BALANCE in", values, "bankBalance");
            return (Criteria) this;
        }

        public Criteria andBankBalanceNotIn(List<BigDecimal> values) {
            addCriterion("BANK_BALANCE not in", values, "bankBalance");
            return (Criteria) this;
        }

        public Criteria andBankBalanceBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("BANK_BALANCE between", value1, value2, "bankBalance");
            return (Criteria) this;
        }

        public Criteria andBankBalanceNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("BANK_BALANCE not between", value1, value2, "bankBalance");
            return (Criteria) this;
        }

        public Criteria andDiffAmountIsNull() {
            addCriterion("DIFF_AMOUNT is null");
            return (Criteria) this;
        }

        public Criteria andDiffAmountIsNotNull() {
            addCriterion("DIFF_AMOUNT is not null");
            return (Criteria) this;
        }

        public Criteria andDiffAmountEqualTo(BigDecimal value) {
            addCriterion("DIFF_AMOUNT =", value, "diffAmount");
            return (Criteria) this;
        }

        public Criteria andDiffAmountNotEqualTo(BigDecimal value) {
            addCriterion("DIFF_AMOUNT <>", value, "diffAmount");
            return (Criteria) this;
        }

        public Criteria andDiffAmountGreaterThan(BigDecimal value) {
            addCriterion("DIFF_AMOUNT >", value, "diffAmount");
            return (Criteria) this;
        }

        public Criteria andDiffAmountGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("DIFF_AMOUNT >=", value, "diffAmount");
            return (Criteria) this;
        }

        public Criteria andDiffAmountLessThan(BigDecimal value) {
            addCriterion("DIFF_AMOUNT <", value, "diffAmount");
            return (Criteria) this;
        }

        public Criteria andDiffAmountLessThanOrEqualTo(BigDecimal value) {
            addCriterion("DIFF_AMOUNT <=", value, "diffAmount");
            return (Criteria) this;
        }

        public Criteria andDiffAmountIn(List<BigDecimal> values) {
            addCriterion("DIFF_AMOUNT in", values, "diffAmount");
            return (Criteria) this;
        }

        public Criteria andDiffAmountNotIn(List<BigDecimal> values) {
            addCriterion("DIFF_AMOUNT not in", values, "diffAmount");
            return (Criteria) this;
        }

        public Criteria andDiffAmountBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("DIFF_AMOUNT between", value1, value2, "diffAmount");
            return (Criteria) this;
        }

        public Criteria andDiffAmountNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("DIFF_AMOUNT not between", value1, value2, "diffAmount");
            return (Criteria) this;
        }

        public Criteria andCheckAccountStatusIsNull() {
            addCriterion("CHECK_ACCOUNT_STATUS is null");
            return (Criteria) this;
        }

        public Criteria andCheckAccountStatusIsNotNull() {
            addCriterion("CHECK_ACCOUNT_STATUS is not null");
            return (Criteria) this;
        }

        public Criteria andCheckAccountStatusEqualTo(String value) {
            addCriterion("CHECK_ACCOUNT_STATUS =", value, "checkAccountStatus");
            return (Criteria) this;
        }

        public Criteria andCheckAccountStatusNotEqualTo(String value) {
            addCriterion("CHECK_ACCOUNT_STATUS <>", value, "checkAccountStatus");
            return (Criteria) this;
        }

        public Criteria andCheckAccountStatusGreaterThan(String value) {
            addCriterion("CHECK_ACCOUNT_STATUS >", value, "checkAccountStatus");
            return (Criteria) this;
        }

        public Criteria andCheckAccountStatusGreaterThanOrEqualTo(String value) {
            addCriterion("CHECK_ACCOUNT_STATUS >=", value, "checkAccountStatus");
            return (Criteria) this;
        }

        public Criteria andCheckAccountStatusLessThan(String value) {
            addCriterion("CHECK_ACCOUNT_STATUS <", value, "checkAccountStatus");
            return (Criteria) this;
        }

        public Criteria andCheckAccountStatusLessThanOrEqualTo(String value) {
            addCriterion("CHECK_ACCOUNT_STATUS <=", value, "checkAccountStatus");
            return (Criteria) this;
        }

        public Criteria andCheckAccountStatusLike(String value) {
            addCriterion("CHECK_ACCOUNT_STATUS like", value, "checkAccountStatus");
            return (Criteria) this;
        }

        public Criteria andCheckAccountStatusNotLike(String value) {
            addCriterion("CHECK_ACCOUNT_STATUS not like", value, "checkAccountStatus");
            return (Criteria) this;
        }

        public Criteria andCheckAccountStatusIn(List<String> values) {
            addCriterion("CHECK_ACCOUNT_STATUS in", values, "checkAccountStatus");
            return (Criteria) this;
        }

        public Criteria andCheckAccountStatusNotIn(List<String> values) {
            addCriterion("CHECK_ACCOUNT_STATUS not in", values, "checkAccountStatus");
            return (Criteria) this;
        }

        public Criteria andCheckAccountStatusBetween(String value1, String value2) {
            addCriterion("CHECK_ACCOUNT_STATUS between", value1, value2, "checkAccountStatus");
            return (Criteria) this;
        }

        public Criteria andCheckAccountStatusNotBetween(String value1, String value2) {
            addCriterion("CHECK_ACCOUNT_STATUS not between", value1, value2, "checkAccountStatus");
            return (Criteria) this;
        }

        public Criteria andModifyTimeIsNull() {
            addCriterion("MODIFY_TIME is null");
            return (Criteria) this;
        }

        public Criteria andModifyTimeIsNotNull() {
            addCriterion("MODIFY_TIME is not null");
            return (Criteria) this;
        }

        public Criteria andModifyTimeEqualTo(String value) {
            addCriterion("MODIFY_TIME =", value, "modifyTime");
            return (Criteria) this;
        }

        public Criteria andModifyTimeNotEqualTo(String value) {
            addCriterion("MODIFY_TIME <>", value, "modifyTime");
            return (Criteria) this;
        }

        public Criteria andModifyTimeGreaterThan(String value) {
            addCriterion("MODIFY_TIME >", value, "modifyTime");
            return (Criteria) this;
        }

        public Criteria andModifyTimeGreaterThanOrEqualTo(String value) {
            addCriterion("MODIFY_TIME >=", value, "modifyTime");
            return (Criteria) this;
        }

        public Criteria andModifyTimeLessThan(String value) {
            addCriterion("MODIFY_TIME <", value, "modifyTime");
            return (Criteria) this;
        }

        public Criteria andModifyTimeLessThanOrEqualTo(String value) {
            addCriterion("MODIFY_TIME <=", value, "modifyTime");
            return (Criteria) this;
        }

        public Criteria andModifyTimeLike(String value) {
            addCriterion("MODIFY_TIME like", value, "modifyTime");
            return (Criteria) this;
        }

        public Criteria andModifyTimeNotLike(String value) {
            addCriterion("MODIFY_TIME not like", value, "modifyTime");
            return (Criteria) this;
        }

        public Criteria andModifyTimeIn(List<String> values) {
            addCriterion("MODIFY_TIME in", values, "modifyTime");
            return (Criteria) this;
        }

        public Criteria andModifyTimeNotIn(List<String> values) {
            addCriterion("MODIFY_TIME not in", values, "modifyTime");
            return (Criteria) this;
        }

        public Criteria andModifyTimeBetween(String value1, String value2) {
            addCriterion("MODIFY_TIME between", value1, value2, "modifyTime");
            return (Criteria) this;
        }

        public Criteria andModifyTimeNotBetween(String value1, String value2) {
            addCriterion("MODIFY_TIME not between", value1, value2, "modifyTime");
            return (Criteria) this;
        }

        public Criteria andModifyUserIdIsNull() {
            addCriterion("MODIFY_USER_ID is null");
            return (Criteria) this;
        }

        public Criteria andModifyUserIdIsNotNull() {
            addCriterion("MODIFY_USER_ID is not null");
            return (Criteria) this;
        }

        public Criteria andModifyUserIdEqualTo(String value) {
            addCriterion("MODIFY_USER_ID =", value, "modifyUserId");
            return (Criteria) this;
        }

        public Criteria andModifyUserIdNotEqualTo(String value) {
            addCriterion("MODIFY_USER_ID <>", value, "modifyUserId");
            return (Criteria) this;
        }

        public Criteria andModifyUserIdGreaterThan(String value) {
            addCriterion("MODIFY_USER_ID >", value, "modifyUserId");
            return (Criteria) this;
        }

        public Criteria andModifyUserIdGreaterThanOrEqualTo(String value) {
            addCriterion("MODIFY_USER_ID >=", value, "modifyUserId");
            return (Criteria) this;
        }

        public Criteria andModifyUserIdLessThan(String value) {
            addCriterion("MODIFY_USER_ID <", value, "modifyUserId");
            return (Criteria) this;
        }

        public Criteria andModifyUserIdLessThanOrEqualTo(String value) {
            addCriterion("MODIFY_USER_ID <=", value, "modifyUserId");
            return (Criteria) this;
        }

        public Criteria andModifyUserIdLike(String value) {
            addCriterion("MODIFY_USER_ID like", value, "modifyUserId");
            return (Criteria) this;
        }

        public Criteria andModifyUserIdNotLike(String value) {
            addCriterion("MODIFY_USER_ID not like", value, "modifyUserId");
            return (Criteria) this;
        }

        public Criteria andModifyUserIdIn(List<String> values) {
            addCriterion("MODIFY_USER_ID in", values, "modifyUserId");
            return (Criteria) this;
        }

        public Criteria andModifyUserIdNotIn(List<String> values) {
            addCriterion("MODIFY_USER_ID not in", values, "modifyUserId");
            return (Criteria) this;
        }

        public Criteria andModifyUserIdBetween(String value1, String value2) {
            addCriterion("MODIFY_USER_ID between", value1, value2, "modifyUserId");
            return (Criteria) this;
        }

        public Criteria andModifyUserIdNotBetween(String value1, String value2) {
            addCriterion("MODIFY_USER_ID not between", value1, value2, "modifyUserId");
            return (Criteria) this;
        }

        public Criteria andBankIdIsNull() {
            addCriterion("BANK_ID is null");
            return (Criteria) this;
        }

        public Criteria andBankIdIsNotNull() {
            addCriterion("BANK_ID is not null");
            return (Criteria) this;
        }

        public Criteria andBankIdEqualTo(String value) {
            addCriterion("BANK_ID =", value, "bankId");
            return (Criteria) this;
        }

        public Criteria andBankIdNotEqualTo(String value) {
            addCriterion("BANK_ID <>", value, "bankId");
            return (Criteria) this;
        }

        public Criteria andBankIdGreaterThan(String value) {
            addCriterion("BANK_ID >", value, "bankId");
            return (Criteria) this;
        }

        public Criteria andBankIdGreaterThanOrEqualTo(String value) {
            addCriterion("BANK_ID >=", value, "bankId");
            return (Criteria) this;
        }

        public Criteria andBankIdLessThan(String value) {
            addCriterion("BANK_ID <", value, "bankId");
            return (Criteria) this;
        }

        public Criteria andBankIdLessThanOrEqualTo(String value) {
            addCriterion("BANK_ID <=", value, "bankId");
            return (Criteria) this;
        }

        public Criteria andBankIdLike(String value) {
            addCriterion("BANK_ID like", value, "bankId");
            return (Criteria) this;
        }

        public Criteria andBankIdNotLike(String value) {
            addCriterion("BANK_ID not like", value, "bankId");
            return (Criteria) this;
        }

        public Criteria andBankIdIn(List<String> values) {
            addCriterion("BANK_ID in", values, "bankId");
            return (Criteria) this;
        }

        public Criteria andBankIdNotIn(List<String> values) {
            addCriterion("BANK_ID not in", values, "bankId");
            return (Criteria) this;
        }

        public Criteria andBankIdBetween(String value1, String value2) {
            addCriterion("BANK_ID between", value1, value2, "bankId");
            return (Criteria) this;
        }

        public Criteria andBankIdNotBetween(String value1, String value2) {
            addCriterion("BANK_ID not between", value1, value2, "bankId");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}