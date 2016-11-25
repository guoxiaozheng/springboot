package cn.sumpay.accountant.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import cn.sumpay.accountant.model.CasBankBalanceCheck;
import cn.sumpay.accountant.model.CasBankBalanceCheckExample;

public interface CasBankBalanceCheckMapper {
	/**
	 * @return
	 */
	String getSequenceNO();
	 /**
	 * @param vo
	 * @return
	 */
//	List<CasBankBalanceCheck> selectCasBankBalanceCheckList(CasBankBalanceCheckVO vo);
	 
    int countByExample(CasBankBalanceCheckExample example);

    int deleteByExample(CasBankBalanceCheckExample example);

    int insert(CasBankBalanceCheck record);

    int insertSelective(CasBankBalanceCheck record);

    List<CasBankBalanceCheck> selectByExample(CasBankBalanceCheckExample example);

    int updateByExampleSelective(@Param("record") CasBankBalanceCheck record, @Param("example") CasBankBalanceCheckExample example);

    int updateByExample(@Param("record") CasBankBalanceCheck record, @Param("example") CasBankBalanceCheckExample example);
}